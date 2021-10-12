/**
 * @param {number[]} row
 * @return {number}
 */
 class UnionSet{
    constructor(n){
        this.boss = []
        this.count = n
        for(let i =0;i<n;i++){
            this.boss[i]=i
        }
    }
    get(x){
        return this.boss[x]==x?x:this.get(this.boss[x])
    }
    mogre(a,b){
        if(this.get(a)==this.get(b)){
            return
        }
        this.boss[this.get(a)]=this.get(b)
        this.count--
    }
    getCount(){
        return this.count
    }
}
 var minSwapsCouples = function(row) {
    let n = row.length
    let u = new UnionSet(n/2)
    for (let i = 0; i < row.length; i+=2) {
        // 满足情侣条件：偶数值+1=基数值
        // 如果是情侣则下取整结果相等，合并的时候会跳过
        u.mogre(row[i]>>1,row[i+1]>>1)        
    }
    // 总的对数减去连通份量数
    // 如果是把N对坐一起的情侣拆开需要N-1次
    // 同样的把N对合在一起也是N-1次，如果有本来就是一对的，1-1=0跳过，相当于变成了对少对不一样的情侣在处理
    // (N1-1)+...+(Nn-1)=N-n
    return n/2- u.getCount()
};