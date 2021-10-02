/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
    let stack = preorder.split(',')
    for(let i = 0,pre=-1;i<stack.length;i++){
        if(pre=="#"&&stack[i]=='#'){
            if(stack[i-2]!=null){
                stack.splice(i-2,3,"#")
                i=-1
                pre=-1
            }else{
                return false
            }
        }else{
            pre=stack[i]
        }
    }
    console.log(stack.length==1&&stack[0]=='#')
    return stack.length==1&&stack[0]=='#'
};

var isValidSerialization = function(preorder) {
    /**
     * 根据二叉树的特点，可以用栈来解决
     * 默认根站一个位置，所以栈初始有一个1
     * 遇到#消耗一个1
     * 遇到数字消耗一个1，压入一个2
     * 如果最后栈空了就代表合法
     */
    const n = preorder.length;
    let i = 0;
    const stack = [1];
    while (i < n) {
        if (!stack.length) {
            return false;
        }
        if (preorder[i] === ',') {
            ++i;
        } else if (preorder[i] === '#') {
            stack[stack.length - 1]--;
            if (stack[stack.length - 1] === 0) {
                stack.pop();
            } 
            ++i;
        } else {
            while (i < n && preorder[i] !== ',') {
                ++i;
            }
            stack[stack.length - 1]--;
            if (stack[stack.length - 1] === 0) {
                stack.pop();
            }
            stack.push(2);
        }
    }
    return stack.length === 0;
};

