const CustomError = require("../extensions/custom-error");

module.exports = function transform(inArr) {
  let arr =inArr.slice() 
  if(arr.length ==0 ){
    return arr
  }
  for (let i = 0; i < arr.length; i++){
    if ( arr[i] == `--discard-next`){
      arr.splice(i,2,'delete this','delete this');
      if(i == arr.length-1) {
        arr[i] = 'delete this';
      }
    };
    if ( arr[i] == '--discard-prev'){
      if(i == 0) {
        arr[i] = 'delete this';
      }else{
        arr.splice(i - 1,2,'delete this','delete this');
      }
    }
    if ( arr[i] == `--double-next`){
      if(i == arr.length-1) {
        arr[i] = 'delete this';
      }else{
      arr[i] = arr[i + 1]
      }
    }
    if ( arr[i] == `--double-prev`){
      arr[i] = arr[i - 1]
      if (i == 0){
        arr[0] = 'delete this';
      }
    }
  }
  return arr.filter(a=>a!='delete this')
};
