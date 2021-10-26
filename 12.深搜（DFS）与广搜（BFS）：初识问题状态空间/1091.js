
/**
 * @param {number[][]} grid
 * @return {number}
 */
 class Node{
    // i,j为坐标   k为距离
    constructor(i=0,j=0,l=0){
        this.i=i
        this.j=j
        this.l=l
    }
}
var shortestPathBinaryMatrix = function (grid) {
    if(grid[0][0])return -1
    let n =grid.length
    // 记录是否到过
    let vis = []
    for (let i = 0; i < n; i++) {
        vis.push([])
        for (let j = 0; j < n; j++) {
            vis[i][j]=0
        }
    }
    let q = []
    // 压入左上角
    q.push(new Node(0,0,1))
    vis[0][0]=1
    // 遍历的八个方向
    let dir = [[-1,0],[-1,-1],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1]]
    while (q.length) {
        let cur = q.shift()
        // 到了
        if(cur.i==n-1&&cur.j==n-1){
            return cur.l
        }
        for (let k = 0; k <8; k++) {
            let x = cur.i + dir[k][0]
            let y = cur.j + dir[k][1]
            if(x<0||x>=n||y<0||y>=n)continue
            if(vis[x][y])continue
            if(grid[x][y])continue
            vis[x][y]=1
            q.push(new Node(x,y,cur.l+1))
        }
    }
    //没走到最下角
    return -1
};