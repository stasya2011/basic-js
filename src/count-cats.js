const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  //throw new CustomError('Not implemented');
  // remove line with error and write your code here
  if(matrix.length){

    let number = [];
matrix.forEach(element => {
   element.forEach((el)=> {
    //    console.log(el);

       if(el == "^^"){           
        number.push(el);             
       }     
       
   })     

    
});
if(number.length){
    return number.length
}
return 0

}else{
    return false
}
};
