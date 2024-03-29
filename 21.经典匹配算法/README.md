# 字符串匹配问题
## 暴力匹配
就是模式串以母串的第一位开始循环配对，不符合就从母串当前匹配的下一位开始匹配。这种方式可以做到**不重不漏**。
- [KMP](http://www.ruanyifeng.com/blog/2013/05/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm.html)
  - 跳过不会产生答案的位置，适合处理流数据
    - 每一次的两者相互匹配之后
    - 如果没有完全匹配（母串不匹配的下标为i模式串为j+1） 
      - 那么匹配的部分，即模式串的前几位，和母串匹配相等的部分
      - 在这部分查找，是否存在前几位等于后几位的情况
        - 模式串的前n位等后n位
      - 此时就可以看做跳过了后n为的前面那几个
      - 将模式串与母串刚才匹配过得部分，后n位对齐
        - 此时需要匹配母串i位置的字符是否与模式串前n位的下一位是否相等（新的对比位置即j2）
        - 如果不相等，就重复上面的步骤，即匹配部分缩小了
        - 如果相等即匹配位置增加了，继续匹配找到不相等的位置重复之前操作
    - 在这个过程中实际是一直在匹配的部分操作查找
    - 即模式串中查找j对应的下一位
    - 如果最后都没有找到，那么就是这一串的位置都不会出现符合要求的
      - 也可以将没有找到时的j下标理解成-1
    - 将模式串的头位开始于i位置继续开始匹配
```
function kmp(text,pattern){
    // 提前处理可能出现n-1个字符相同情况下的位移方案
    // 前后x位相等的下标记录 
    // 由pattern自己与自己匹配得出
    let next =[]
    // p="abcabd"时，next[4]=2
    let n = pattern.length
    // 初始化next数组
    // 如果第一位就失败直接-1
    next[0]=-1
    // 当前处理的位置,即出现不匹配的位置
    // 如果从0开始没有意义，起码得有两位
    // 也就是从前两位开始比较
    let i = 1
    // 当前处理位置的前一位,即重复部分的最后一位
    let j = -1
    for (; pattern[i]; i++) {
        // 如果i!=j+1 就需要将j往前移动
        while(j!=-1&&pattern[i]!=pattern[j+1]){
            j =next[j]
        }
        if(pattern[i]==pattern[j+1]){
            j++
        }
        next[i] = j
        // 最终next记录所有部分匹配情况下最后一位的下标
    }
    console.log(next);
    // 匹配
    // 如果出现了不全匹配的情况，就去next中找对应的情况，将pattern移动相同部分的位置，再看下一位是否匹配，如果出现不匹配重复上面操作，一直到pattern匹配完符合要求即找到第一个匹配的位置i-j
    // 这里j就可以理解为前后相同位数+1，也就是最后相同以为的下标
    for (let i = 0,j=-1; text[i]; i++) {
        while(j!=-1&&pattern[j+1]!=text[i]){
            j=next[j]
        }        
        if(pattern[j+1]==text[i]){
            j++
        }
        if(pattern[j+1]==null){
            return i-j
        }
    }
    return -1
}
console.log(kmp("aaacaaabcacadaaaab",'aaab'));
```
- Sunday
  - 出现不匹配
    - 以模式串长度加上当前匹配位置i对应字符为**黄金对齐点位**
  - 在模式串中由后向前找到第一个与当前不匹配字符相等的字符
  - 将两者对齐
  - 如果没有找到将模式串的第一位前面想象成还有一位-1可以与任何字符匹配，将两者对齐
    - 也就是将模式串的第一位对齐当前不匹配的字符的下一位
  - 这个算法效率在处理已知母串时的效率优于KMP，不能处理流数据
```
function sunday(text,pattern){
    // 记录每个字符出现的最后一个位置
    let next ={}
    for (let i = 0; i < pattern.length; i++) {
        next[pattern[i]]=i
    }
    for (let i = 0; i+pattern.length <= text.length; i+=pattern.length-next[text[i+pattern.length]]) {
        let status = 1
        for (let j = 0; j < pattern.length; j++) {
            if(text[i+j]==pattern[j]){
                continue
            }
            status=0
            break
        }
        if(status==1){
            return i
        }
    }
    return -1
}
console.log(sunday("aaacaaabcacadaaaab",'aaab'));
```
- Shift-And(可以处理流数据，可以处理多模式串匹配)
  - 预处理模式串成二进制数据辅助表（每种字符出现的位置）
  - 由于字符串是从左到右从大到小和正常数字相反，所以处理之后的信息和正常数字是相反的，按照字符串的特点来的
    - 出现过的位置为1没有为0
    - 从左到右
  - 匹配的时候设置一个p也是二进制同上初始全是0
    - 0表示匹配失败1表示成功
    - 记录可以匹配模式串的前几位
    - 以母串当前位置为结尾，能配成功模式串的前几位
    - 最高位为1即为成功找到
      - p=(p<<1|1)&d[s[i]]
      - p&(1<<(n-1))?=1
  - 上面的二进制也可以不倒过来
  - 二进制计算
    - 与：&
      - 真真为真，假假为假，真假为假
    - 或：|
      - 真真为真，假假为假，真假为真
    - 非：~（按位取反）
      - 真为假，假为真
    - 左移：<<（位权变大）
      - 操作系统中一个整数占了32个比特位，最左边的一位代表正负
        - 0为正
        - 1为负
      - 左边丢弃x位，右边用0补位，原符号位补相同的
      - 乘2
    - 右移：>>（位权变小）
      - 右边丢弃x位，左边用0补位，原符号位补相同的
        - 正数左边用0补位，负数用1
      - 除2下取整
    - 异或运算：^
      - 不同为真，相同为假
      - 逆运算
        - 0^n=n
        - a^b=c a^c=b b^c=a
```
function Shift_And(text,pattern){
   let map = []
   let n 
   for(n =0;pattern[n];n++){
      map[pattern[n]] |= (1<<n)
   } 
   let p =0
   for(let i=0;text[i];i++){
      p=(p<<1|1)&map[text[i]]
      if(p&(1<<(n-1))){
         return i-n+1
      }
   }
   return -1
}
console.log(Shift_And("aaacaaabcacadaaaab",'aaab'));
```
## 题目来源[LeetCode](https://leetcode-cn.com/)
- 44：通配符匹配
- 10: 正则表达式匹配