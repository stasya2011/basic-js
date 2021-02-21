
class VigenereCipheringMachine {
  constructor(typeOfMachine){
    this.typeOfMachine = typeOfMachine;
  }
  encrypt(str, key) {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(str === undefined || key === undefined ){
      throw new Error("Error!!!");
    }
    let arrOfKeyNumber = [];
    let arrOfStringNumber = [];
    let arrNew = [];
    for(let i = 0; i< key.length; i++){
      arrOfKeyNumber.push(key.charCodeAt(i));
    }
  

    for(let j = 0; j< str.length; j++){
      arrOfStringNumber.push(str.charCodeAt(j));
    }

    for(let k = 0; k<arrOfStringNumber.length; k++){
      if(arrOfStringNumber[k]>90 || arrOfStringNumber[k]<65){
        arrNew.push(arrOfStringNumber[k]);
      }else{

       for(let d = 0; d<arrOfKeyNumber.length; d++){
         console.log(arrOfKeyNumber[d] + arrOfStringNumber[k]);
       }

      }

    }



    
    if(this.typeOfMachine == false){
      return "reverse";
    }else{
      return arrOfStringNumber;
    }


  }    


  decrypt() {
    //throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }


}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('ddd!', 'aaa')); 