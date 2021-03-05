const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for ( let i = 0; i < matrix.length; i++){        // внешний цикл
    for( let x = 0; x < matrix[i].length; x++){
      if ( matrix[i][x] === '^^' ){count++};
    }
    
  } 
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
return count;
};
