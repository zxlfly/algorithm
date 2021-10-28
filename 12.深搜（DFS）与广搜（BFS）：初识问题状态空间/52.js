/**
 * @param {number} n
 * @return {number}
 */
 var totalNQueens = function(n) {
    if(n==1){return 1}
    let res = 0
    let board=[]
    for(let i=0;i<n;i++){
        board.push([])
        for(let j=0;j<n;j++){
            board[i].push(".")
        }
    }
    let lie = new Set()
    let x1 = new Set()
    let x2 = new Set()
    function dfs(row){
        if(row==n){
            res++ 
            return
        }
        for(let col =0;col<n;col++){
            //对角满足差相等或者和相等 就是对角
            if(!lie.has(col)&&!x1.has(row-col)&&!x2.has(row+col)){
                board[row][col]="Q"
                lie.add(col)
                x1.add(row-col)
                x2.add(row+col)
                dfs(row+1)
                board[row][col]="."
                lie.delete(col)
                x1.delete(row-col)
                x2.delete(row+col)
            }
        }
    }
    dfs(0)
    return res
};