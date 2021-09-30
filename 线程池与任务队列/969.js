/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var pancakeSort = function(arr) {
    if(arr.length<=1||arr==arr.reverse()){return []}
    let ind = {}
    let res= []
    for(let i =0;i>arr.length;i++){
        ind[arr[i]]=i
    }
    ind.sort((a,b)=>(a-b))
};