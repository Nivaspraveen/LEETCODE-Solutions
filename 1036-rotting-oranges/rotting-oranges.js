/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
    const rows = grid.length;
  const cols = grid[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const queue = [];
  let freshCount = 0;
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      else if (grid[i][j] === 1) freshCount++;
    }
  }
  let minutes = 0;
  while (queue.length > 0 && freshCount > 0) {
    minutes++;
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [x, y] = queue.shift();
      
      for (const [dx, dy] of directions) {
        const newX = x + dx;
        const newY = y + dy;
        
        if (newX >= 0 && newX < rows && newY >= 0 && newY < cols && grid[newX][newY] === 1) {
          grid[newX][newY] = 2;
          freshCount--;
          queue.push([newX, newY]);
        }
      }
    }
  }
  return freshCount === 0 ? minutes : -1;
};