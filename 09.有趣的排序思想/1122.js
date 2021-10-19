/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
 var relativeSortArray = function(arr1, arr2) {
    //  计数
    let map= new Map()
    let res = []
    for(let x of arr1){
        if(map.has(x)){
            map.set(x,map.get(x)+1)
        }else{
            map.set(x,1)
        }
    }
    for(let x of arr2){
        let i = map.get(x)
        while(i>0){
            res.push(x)
            i--
        }
        map.delete(x)
    }
    let temp = []
    for(let x of map.keys()){
        let i = map.get(x)
        while(i>0){
            temp.push(x)
            i--
        }
    }
    temp.sort((a,b)=>a-b)
    return res.concat(temp)
};