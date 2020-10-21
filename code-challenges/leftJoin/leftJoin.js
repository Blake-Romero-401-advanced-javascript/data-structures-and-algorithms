'use strict'

function leftJoin(hashOne, hashTwo) {
  const newArray = [];

  //checks first hashTable for keys that exist and pushes to new array
  hashOne.bucket.forEach(outerBucket => {
    outerBucket.forEach(innerBucket => {
      if(innerBucket) {
        newArray.push([innerBucket[0], innerBucket[1]]);
      } else {
        return;
      }
    });
  });

  //compare second hashTable for keys and values then push to new array
  for( let i = 0; i < newArray.length; i++) {
    let key = newArray[i][0];
    if(hashTwo.contains(key)) {
      const hashTwoValue = hashTwo.get(key);
      newArray[i].push(hashTwoValue);
    } else {
      newArray[i].push('null');
    }
  }
  return newArray;
}

module.exports = leftJoin;
