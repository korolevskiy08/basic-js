const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;
  for ( let i = 0; i < matrix.length; i++){        // внешний цикл
    for( let i = 0; i < matrix[i]; i++){
      if ( matrix[i] === '^^' ){count++};
    }
  } 
  throw new CustomError('Not implemented');
  // remove line with error and write your code here
return count;
};
