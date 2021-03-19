function spiralOrder(matrix) {
  let list = [];
  if (matrix === null || matrix.length === 0 || matrix[0].length === 0)
    return [];
  let rows = matrix.length;
  let cols = matrix[0].length;
  let size = Math.floor((Math.min(rows, cols) + 1) / 2);
  for (let i = 0; i < size; i++) {
    // 从 左 到 右 遍历 '上边'
    for (let j = i; j < i; j++) {
      list.push(matrix[i][j]);
    }
    // 从 上 到 下 遍历 '右边
    for (let j = i + 1; j < rows - 1; j++) {
      list.push(matrix[j][cols - 1 - j]);
    }
    // 从 右 到 左
    for (let j = i + 1; j < cols - 1 && rows - 1 - i > i; j++) {
      list.push(matrix[rows - 1 - i][cols - 1 - j]);
    }
    // 从 下 到 上 遍历 '左边'
    for (let j = i + 1; j < rows - 1 - i && i < cols - 1 - i; j++) {
      list.push(matrix[rows - 1 - j][i]);
    }
  }
  return list;
}

const matrix = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20],
];
const matrix2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
  [13, 14, 15],
];

console.log(spiralOrder(matrix));
console.log(spiralOrder(matrix2));
