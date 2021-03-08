/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    function getNext(x) {
        let a = 0
        while (x) {
            a += (x % 10) * (x % 10)
            x = Math.floor(x / 10)
        }
        return a
    }
    let p = n
    let q = n
    do {
        p = getNext(p)
        q = getNext(getNext(q))
    } while (p != q && q != 1)
    return q == 1
};

// 算出10万(包括10万)内所有开心数的和
// 最直接的方法循环0-10万每个都运行上面isHappy方法，但是效率低耗时久
// 可以创建缓存区，分别存储，非开心数和开心数
// 并且需要记录每个数字计算过程中出现的所有数字，如果是快乐数，就都添加到isHappyNum，否则就添加到notHappyNum。每次计算完毕清空缓存
let redis = []	//缓存数据
let isHappyNum = [] //快乐数
let notHappyNum = [] //非快乐数
let res = 0
let isHappy2 = function (n) {
    n = n.toString()
    // 如果需要去掉isHappyNum和notHappyNum中的重复数据可以加上下面这段代码，或者使用Set类型不使用数组
    // 下面这段代码由于每次都要去数组中查看是否存在，所以对性能影响很大
    // if(isHappyNum.indexOf(n)>-1){
    //     isHappyNum.push(...redis)
    //     redis = []
    //     return true
    // }
    // if(notHappyNum.indexOf(n)>-1){
    //     notHappyNum.push(...redis)
    //     redis = []
    //     return false
    // }
    redis.push(n)
    if (n === '0') return 0
    let num = 0
    for (let i = 0; i < n.length; i++) {
        let item = n[i]
        num += item * item
    }
    if (num === 1) {
        isHappyNum.push(...redis)
        redis = []
        return true
    }
    if (redis.indexOf('' + num) > -1) {
        notHappyNum.push(...redis)
        redis = []
        return false
    }
    return isHappy2(num)
}
for (let i = 0; i <= 100000; i++) {
    if(isHappy2(i)){
        res+=i
    }
}
console.log('isHappyNum===', isHappyNum)
console.log('notHappyNum===', notHappyNum)
console.log('res===', res)



