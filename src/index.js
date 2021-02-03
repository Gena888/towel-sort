module.exports = function towelSort(matrix) {
  let arr = []
  if (!matrix) { return arr } else {
    for (i = 0; i < matrix.length; i++) {
      if (i % 2 === 0) {
        for (let j = 0; j < matrix[i].length; j++) {
          arr.push(matrix[i][j])
        }
      } else {
        for (let x = matrix[i].length - 1; x >= 0; x--) {
          arr.push(matrix[i][x])
        }
      }

    }

  }
  return arr
}

