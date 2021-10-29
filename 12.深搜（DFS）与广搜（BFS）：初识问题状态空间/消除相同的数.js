let arr = [7,6,6,6,7,6,7,9,8,8,9]
arr.sort((a,b)=>a-b)
for (let i = arr.length-1; i >=0; i--) {
    let s = i
    let temp = arr[i]
    while(temp==arr[i-1])i--
    if(i==0){
        arr.splice(i,s-i)
    }else{
        arr.splice(i,s-i+1)
    }
}
console.log(arr);