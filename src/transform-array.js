const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let arr1 = [];
  for (let i = 0; i < arr.length; i++){
    if ( arr.length == 0){}
    if (!(arr1 instanceof Array)){throw new Error}
    if ( arr[i] == `--discard-next`){arr1.pop(arr[i + 1])}
    if ( arr[i] == `--discard-prev`){arr1.pop(arr[i - 1])}
    if ( arr[i] == `--double-next` ){arr1[i + 1]*2 }
    if ( arr[i] == `--double-prev` ){arr1[i - 1]*2 }
  } 
  
  throw new CustomError('Not implemented');
  // remove line with error and write your code here

};
