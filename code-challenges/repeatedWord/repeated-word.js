'use strict';

class Repeat {

  repeatedWord(str) { 
    console.log('string', str);
    let split = str.split(' '); 
    
    for(let i = 0; i < split.length; i++) { 
      let word = split[i].toLowerCase();
      
      
      for(let j = i + 1; j < split.length; j++) { 
        let wordCompare = split[j].toLowerCase();
        if(word === wordCompare) {
          return word;
        }
      }
    }
  }
  
}

module.exports = Repeat;