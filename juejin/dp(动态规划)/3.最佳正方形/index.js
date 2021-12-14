// 在一个由 0 和 1 组成的二维矩阵内，找到只包含 1 的最大正方形，并返回其面积
// https://leetcode-cn.com/problems/maximal-square/submissions/


const maximalSquare = (matrix) => {
  const dp = [];
  let max = 0;

  const rowLength = matrix.length;
  const colLength = matrix[0].length;

  for (let i = 0; i < rowLength; i++) {
    dp[i] = [];
    for (let j = 0; j < colLength; j++) {
      if (i === 0 || j === 0 || matrix[i][j] === "0") {
        dp[i][j] = Number(matrix[i][j]);
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - 1], dp[i][j - 1]) + 1;
      }
      max = Math.max(dp[i][j], max);
    }
  }
  return max * max;
};

const matrix = [
  ["1", "0", "1", "0", "0"],
  ["1", "0", "1", "1", "1"],
  ["1", "1", "1", "1", "1"],
  ["1", "0", "0", "1", "0"],
];
