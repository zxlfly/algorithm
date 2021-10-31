// 不可以修改原数组
let arr = [7,6,6,6,7,6,7,9,8,8,9]
// let arr = [7,6,6,6,7,6]
let map = new Map()
for (let i = 0; i < arr.length; i++) {
    if(!map.has(arr[i])){
        map.set(arr[i],i)
    }    
}
arr = Array.from(map.keys())
console.log(arr);
// 可以修改原数组
let arr2 = [7,6,6,6,7,6,7,9,8,8,9,10,12,19,10,10,11,11,19,12,13]
arr2.sort((a,b)=>a-b)
for (let i = 0; i < arr2.length; i++) {
     let s = i
     let temp = arr2[i]
     while (temp==arr2[i+1])i++
     if(i-s>0){
         arr2.splice(s,i-s)
         i=s
     }
}
console.log(arr2);
//实际项目中使用的方式
let arr3 = [7,6,6,6,7,6]
arr3=Array.from(new Set(arr3))
console.log(arr3);