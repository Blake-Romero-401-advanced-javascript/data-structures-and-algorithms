'use strict';

const Repeat = require('./repeated-word');

let str = 'It was a queer, sultry summer, the summer they electrocuted the Rosenbergs, and I didn’t know what I was doing in New York';

let strTwo = 'It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way – in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only';

let strThree = 'Once upon a time, there was a brave princess who';

describe('repeated word', () => {
  it('should return duplicate words from first string', () => {
    const repeatWord = new Repeat();
    const testString = repeatWord.repeatedWord(str);
    expect(testString).toBe('was');
  })

  it('should return duplicate words from second string', () => {
    const repeatWord = new Repeat();
    const testString = repeatWord.repeatedWord(strTwo);
    expect(testString).toBe('it');
  })

  it('should return duplicate words from third string', () => {
    const repeatWord = new Repeat();
    const testString = repeatWord.repeatedWord(strThree);
    expect(testString).toBe('a');
  })
})