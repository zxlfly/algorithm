/**
 * @param {number} n
 * @return {string[][]}
 */
 var solveNQueens = function(n) {
    if(n==1){return [["Q"]]}
    let res = []
    // 棋盘
    let board =[]
    for (let i = 0; i < n; i++) {
        board.push([])
        for (let j = 0; j < n; j++) {
            board[i].push('.')
        }
    }
    // 皇后所在的列
    let lie = new Set()
    // 斜线(正反)
    let x1 = new Set()
    let x2 = new Set()
    function dfs(row){
        if(row==n){
            let clone = board.slice()
            for(let i=0;i<n;i++){
                clone[i]=clone[i].join('')
            }
            res.push(clone)
            return
        }
        for (let col = 0; col < n; col++) {
            //如果当前所在列和对角线没有皇后，可以放或者跳过
            if(!lie.has(col)&&!x1.has(row+col)&&!x2.has(row-col)){
                board[row][col]="Q"
                // 记录
                lie.add(col)
                x1.add(row+col)
                x2.add(row-col)
                // 放置
                dfs(row+1)
                // 回溯的时候撤销
                board[row][col]="."
                lie.delete(col)
                x1.delete(row+col)
                x2.delete(row-col)
            }
        }
    }
    dfs(0)
    return res
};