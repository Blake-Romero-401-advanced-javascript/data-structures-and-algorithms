'use strict';

function insertShiftArray(array,value){
  
  let newArray = [];
  let middle = Math.round(array.length / 2);

  for(let i = 0; i < array.length; i++){
    if (i === middle){
      newArray.push(value);
    }
      newArray.push(array[i]);
  }
  return newArray;//an array with new value added to middle
}