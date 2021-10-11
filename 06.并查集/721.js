/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
 class Unionset{
    constructor(n){
        this.boss=[]
        for(let i = 0;i<n;i++){
            this.boss[i]=i
        }
    }
    get(x){
        if(this.boss[x]==x){return x}
        let root = this.get(this.boss[x])
        this.boss[x]=root
        return root
    }
    morge(a,b){
        let ba = this.get(a)
        let bb = this.get(b)
        if(ba==bb){return}
        this.boss[ba]=bb
    }
}
var accountsMerge = function(accounts) {
    let emailsToCount=new Map()
    let emailsToName=new Map()
    let emailsCount = 0
    for(let x of accounts){
        let name = x[0]
        for(let i =1;i<x.length;i++){
            if(!emailsToCount.has(x[i])){
                emailsToCount.set(x[i],emailsCount)
                emailsCount++
                emailsToName.set(x[i],name)
            }
        }
    }
    let u = new Unionset(emailsCount)
    for(let x of accounts){
        let email = x[1]
        let first = emailsToCount.get(email)
        for(let i=2;i<x.length;i++){
            let next = emailsToCount.get(x[i])
            u.morge(first,next)
        }
    }
    let rootToEmail = new Map()
    for(let x of emailsToCount.keys()){
        let root = u.get(emailsToCount.get(x))
        arr = rootToEmail.get(root)?rootToEmail.get(root):[]
        arr.push(x)
        rootToEmail.set(root,arr)
    }
    let res = []
    for(let x of rootToEmail.values()){
        x.sort()
        let arr = [emailsToName.get(x[0])]
        arr.push(...x)
        res.push(arr)
    }
    return res
};