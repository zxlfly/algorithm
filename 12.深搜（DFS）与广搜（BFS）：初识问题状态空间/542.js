/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 class Node{
    // i,j为坐标   k为距离
    constructor(i=0,j=0,k=0){
        this.i=i
        this.j=j
        this.k=k
    }
}
var updateMatrix = function(mat) {
    // 广搜队列
    let q = []
    // 输出数组
    let dist = []
    //初始化
    let n = mat.length //行
    let m = mat[0].length //列
    for (let i = 0; i < n; i++) {
        dist.push([])
        for (let j = 0; j < m; j++) {
            // 不是0的
            dist[i][j]=-1
            if(mat[i][j]==0){
                dist[i][j]=0
                q.push(new Node(i,j,0))
            }
        }
    }
    // 操作获取四个方向时用于计算得出对应的坐标
    let dir = [[0,1],[1,0],[0,-1],[-1,0]]
    while (q.length) {
        let cur = q.shift()
        // 四个方向
        for (let k = 0; k < 4; k++) {
            // 计算对应方向的坐标
            let x = cur.i + dir[k][0]
            let y = cur.j + dir[k][1]
            // 看是否超界
            if(x<0||x>=n||y<0||y>=m){continue}
            // 访问过
            if(dist[x][y]!=-1)continue
            // 计算距离
            dist[x][y]=cur.k+1
            q.push(new Node(x,y,cur.k+1))
        }
    }
    return dist
};