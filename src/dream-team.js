const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!(members instanceof Array)){
    return false
  }
  let name = [];
  for (let i = 0; i < members.length; i++){
    if(typeof members[i] == 'string'){
      name.push(members[i].trim()[0].toUpperCase())}
  }
  return name.sort().join('');
  // throw new CustomError('Not implemented');
  // remove line with error and write your code here
};
