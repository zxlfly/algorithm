/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
// 找到边界的O
// 与边界O相邻的O不会被包围
// 其他的全部是X
class Node {
    constructor(i, j) {
        this.i = i
        this.j = j
    }
}
// 广搜
var solve = function (board) {
    let q = []
    let res = []
    let map = new Set()
    let n = board.length
    let m = board[0].length
    for (let i = 0; i < n; i++) {
        res.push([])
        for (let j = 0; j < m; j++) {
            res[i][j] = "X"
            if (i == 0 || i == n - 1 || j == 0 || j == m - 1) {
                if (board[i][j] == "O") {
                    res[i][j] = "O"
                    map.add(i * n + j)
                    q.push(new Node(i, j))
                }
            }
        }
    }

    let dir = [[0, -1], [0, 1], [1, 0], [-1, 0]]
    while (q.length) {
        let cur = q.shift()
        for (let i = 0; i < 4; i++) {
            let x = cur.i + dir[i][0]
            let y = cur.j + dir[i][1]
            if (x < 0 || x >= n || y < 0 || y >= m) continue
            if (map.has(x * m + y)) continue
            if (board[x][y] == 'X') continue
            q.push(new Node(x, y))
            res[x][y] = "O"
            map.add(x * m + y)
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            board[i][j] = res[i][j]
        }
    }
};
// 深搜
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
    let n = board.length
    let m = board[0].length
    let dir = [[0, -1], [0, 1], [1, 0], [-1, 0]]
    for (let i = 0; i < n; i++) {
        if (board[i][0] == 'O') dfs(i, 0, board);
        if (board[i][m - 1] == 'O') dfs(i, m - 1, board);
    }
    for (let j = 0; j < m; j++) {
        if (board[0][j] == 'O') dfs(0, j, board);
        if (board[n - 1][j] == 'O') dfs(n - 1, j, board);
    }

    function dfs(i, j) {
        board[i][j] = 'o';
        for (let k = 0; k < 4; k++) {
            let x = i + dir[k][0];
            let y = j + dir[k][1];
            if (x < 0 || x >= n) continue;
            if (y < 0 || y >= m) continue;
            if (board[x][y] != 'O') continue;
            dfs(x, y, board);
        }
    }
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] == 'O') board[i][j] = 'X';
            else if (board[i][j] == 'o') board[i][j] = 'O';
        }
    }
};