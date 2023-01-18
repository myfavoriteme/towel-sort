
// You should implement your task here.

module.exports = function towelSort (matrix) {
  
  let out = [];
  if (matrix){

    for (let i = 0; i < matrix.length; i++){
      if (i % 2 == 0){
        for (let l = 0; l < matrix[i].length; l++){
        out.push(matrix[i][l]);
        }
      }
      else if (i % 2 != 0) {
        for (let k = matrix[i].length - 1; k >= 0; k--){
          out.push(matrix[i][k]);
        }
      }
    }

  }
  
  

  return out;
}
