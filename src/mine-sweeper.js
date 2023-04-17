const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The res should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const mines = [];

  for (let r = 0; r < rows; r++) {
    const rowMines = [];

    for (let c = 0; c < cols; c++) {
      let count = 0;

      for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
          if (i === 0 && j === 0) {
            continue;
          }

          const neighborR = r + i;
          const neighborC = c + j;

          if (neighborR >= 0 && neighborR < rows && neighborC >= 0 && neighborC < cols && matrix[neighborR][neighborC]) {
            count++;
          }
        }
      }

      rowMines.push(count);
    }

    mines.push(rowMines);
  }

  return mines;
}

module.exports = {
  minesweeper
};
