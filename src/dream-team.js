const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false;
}else{
    if(members.length == 0){
        return false;
    }

    let s = [];
    members.forEach(element => {
        if (typeof element == "string") {
            s.push(element.trim().substr(0, 1).toUpperCase());
        }
    });

    if(s.length == 0){
        return false;
    }else{
        return s.sort().join().replace(/,/g, "");
    }

}
};
