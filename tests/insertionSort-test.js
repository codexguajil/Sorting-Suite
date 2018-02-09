const assert = require('chai').assert;
const insertionSort = require('../lib/insertionSort');
const randomNumber = require('../lib/randomNumber');

describe('insertionSort', function () {

  it('should be a function', function () {
    assert.isFunction(insertionSort);
  });

  it('should sort an array of numbers', function () {
    let numberArray = [3, 2, 7, 6, 5];
    assert.deepEqual(insertionSort(numberArray), [2, 3, 5, 6, 7])
  });

  it('should sort an array of letters', function () {
    let letterArray = ['c', 'a', 'd', 'b', 'e'];
    assert.deepEqual(insertionSort(letterArray), ['a', 'b', 'c', 'd', 'e'])
  });

  it('should sort positive and negative numbers', function () {
    let numbersArray = [-1, 5, -3, 10, 4];

    assert.deepEqual(insertionSort(numbersArray), [-3, -1, 4, 5, 10]);
  });

  it('should sort an array of large random numbers', function() {
    let random = randomNumber(31001, 31000) //513ms
    let sortedArray = insertionSort(random);

    for(let i = 0; i < sortedArray.length-1; i++) {
    assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });
})