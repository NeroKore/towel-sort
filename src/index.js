
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(Array.isArray(matrix)) {
    let res = [];
    for (const [index, element] of matrix.entries()) {
        if (index % 2 == 0) {
            for (const e in element) {
                res.push(matrix[index][e]);
            }
        } else {
            matrix[index].reverse();
            for (const e in element) {
                res.push(matrix[index][e]);
            }
        }
    }
    return res;
  } else return [];
}
