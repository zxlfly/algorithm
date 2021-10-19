/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
 var findOrder = function(numCourses, prerequisites) {
    // 记录入度
    let indge = new Array(numCourses).fill(0)
    // 记录邻接关系
    let map ={}
    for(let i=0;i<prerequisites.length;i++){
        ++indge[prerequisites[i][0]]
        // 
        if(map[prerequisites[i][1]]){
            map[prerequisites[i][1]].push(prerequisites[i][0])
        }else{
            map[prerequisites[i][1]]=[prerequisites[i][0]]
        }
    }
    // 记录入度为0的
    let queue = []
    for(let i =0;i<numCourses;i++){
        if(indge[i]==0){
            queue.push(i)
        }
    }
    let res = []
    while(queue.length>0){
        let temp = queue.shift()
        res.push(temp)
        // 后续课程
        let t = map[temp]
        if(t&&t.length){
            for(let i =0;i<t.length;i++){
                indge[t[i]]--
                if(indge[t[i]]==0){
                    queue.push(t[i])
                }
            }
        }
    }
    return res.length==numCourses?res:[]
};