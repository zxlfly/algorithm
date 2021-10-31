let arr = [7,6,6,6,7,6,7,9,8,8,9]
// let arr = [7,6,6,6,7,6]
let i = 0
do{
    let s = i
    let temp = arr[i]
    while(temp==arr[i+1])i++
    if(i-s>0){
        arr.splice(s,i-s+1)
        i=s-1
        if(i<0){i=0}
    }else{
        i++
    }
}while(i<arr.length&&arr.length>1)