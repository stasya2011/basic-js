const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str: [],
  getLength() {
    return this.str.length;
  },
  addLink(value) {   
     
          if(value != null){
              value = value.toString();
              this.str.push(`( ${value} )~~`);
          }else{
              this.str.push(`(null)~~`);
          }             

      
      return this;             
     
  },
  removeLink(position) {
      if(position>0 && position<=this.str.length && !position.toString().includes(".") && Number(position)){
          this.str.splice(position-1, 1);
          return this;
      }else{
          throw new Error("Упс!");
      }
   
  },
  reverseChain() {
      this.str.reverse();
      return this;
   
  },
  finishChain() {
          let d = this.str.pop();          
          this.str.push(d.replace(/\~/g, ""));
          let s = this.str.join().replace(/,/g, "");
          this.str = "";
    return s;
  }
};

module.exports = chainMaker;
