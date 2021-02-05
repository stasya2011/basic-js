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
              this.str.push(`( null )~~`);
          }             

      
      return this;             
     
  },
  removeLink(position) {
      if(position>0 && position<this.str.length && !position.toString().includes(".") && Number(position)){
          this.str.splice(position-1, 1);
          return this;
      }else{
          this.str = [];
          throw new Error("Error");
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
          this.str = [];
    return s;
  }
};

//console.log(chainMaker.addLink(3.14).addLink(1).addLink({0: 'first', 1: 'second', 'length': 2}).removeLink(1).addLink('DEF').addLink({0: 'first', 1: 'second', 'length': 2}).removeLink(1).addLink(true).addLink(false).addLink(333).reverseChain().reverseChain().finishChain());
//, '( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )'
//  '( [object Object] )~~( DEF )~~( [object Object] )~~( true )~~( false )~~( 333 )'

module.exports = chainMaker;
