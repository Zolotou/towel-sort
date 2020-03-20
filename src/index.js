
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length == 0){
  return [];
  }

  let result = [];
  for (i=0; i<matrix.length; i++){
      let arr = matrix[i];
      if (!(i%2 == 0)){
        arr.reverse();
      }
    for(j=0;j<arr.length; j++){
      result.push(arr[j]);
    }
  }

    return result;
}
