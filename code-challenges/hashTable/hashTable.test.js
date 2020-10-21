'use strict';

const Hashtable = require('./hashTable');


it('should add in correct spot', () => {
  const table = new Hashtable();
  table.add('tree', 'birch');
  const index = table.hash('tree');
  const value = table.bucket[index];
  expect(value[0][1]).toBe('birch');

  let key = 'tree';
  const contents = table.get(key);
  expect(contents).toBe('birch');

});



it('should correctly hash a key to an in-range value', () => {
  const table = new Hashtable();
  const index = table.hash('this is a thing to HASH');
  expect(index < 1024 && index >= 0 );

  const table2 = new Hashtable(256);
  const index2 = table2.hash('blake');
  expect(index2 < 256 && index2 >= 0);
});



it('should retreive the correct value stored, based on a key', () => {
  const table = new Hashtable();
  table.add('tree', 'pine');
  const value = table.get('tree');
  expect(value).toBe('pine');
});


it('should successfully return null for a key that doesn\'t exist in hashtable', () => {
  const table = new Hashtable();
  table.add('tree', 'pine');
  const value = table.get('plant');
  expect(value).toBe(null);
});


it('should successfully handle a collision within the hashtable', () => {

  const table = new Hashtable();
  table.add('tree', 'cedar');
  expect(table.contains('tree')).toBe(true);

  table.add('eert', 'pine');
  expect(table.contains('eert')).toBe(true);

  table.add('eret', 'maple');
  expect(table.contains('eret')).toBe(true);

});

