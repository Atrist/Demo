function Tree(val, leftNode, rightNode) {
  this.val = val;
  this.leftNode = leftNode;
  this.rightNode = rightNode;
}

function bfs() {
  let result = [];
  let stack = [tree]; // 先将要遍历的树压入栈
  let count = 0; // 用来记录执行到第一层
  let bfsTree = function () {
    let node = stack[count];
    if (node) {
      result.push(node.value);
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
      count++;
      bfsTree();
    }
  };
}

const tree = new Tree(1)
bfs();
console.log(result);
