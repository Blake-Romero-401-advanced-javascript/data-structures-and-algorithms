'use strict'

const { describe } = require('yargs');
const HashTable = require('../hashTable/hashTable');
const leftJoin = require('../leftJoin/leftJoin');

const tableOne = new HashTable();
tableOne.add('fond', 'enamored');
tableOne.add('wrath', 'anger');
tableOne.add('diligent', 'employed');
tableOne.add('outfit', 'garb');
tableOne.add('guide', 'usher');

const tableTwo = new HashTable();
tableTwo.add('fond', 'averse');
tableTwo.add('wrath', 'delight');
tableTwo.add('diligent', 'idle');
tableTwo.add('guide', 'follow');
tableTwo.add('flow', 'jam');

const expectedOutput = [
  ['fond', 'enamored', 'averse'],
  ['wrath', 'anger', 'delight'],
  ['diligent', 'employed', 'idle'],
  ['outfit', 'garb', 'null'],
  ['guide', 'usher', 'follow']
]


// describe('Left Join two HashTables', () => {

  it('should left join two hashtables', () => {
    expect(leftJoin(tableOne, tableTwo)).toEqual(expectedOutput);
  });

// });

// I am not understanding why the test is failing...I am getting repeated arrays within the test results and am not sure why it is repeating. I suspect it may have to do with the sizing of the hashmap.
