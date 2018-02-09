function insertionSort (array) {
  for(let i = 1; i < array.length; i++) {
    let temp = array[i];
    let j = i - 1;
    while (j >= 0 && array[j] > temp) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = temp;
  }
    return array;
}

module.exports = insertionSort;

//two arrays, unsorted (passed in), sorted starts empty
//us.shift()
//s.push() x 2
//compare s[0] & s[1]
//return sorted

//function insertionSort(array) 
// Loop through array
// Create temp var for current element
// Create var and set equal to previous element's index
// Loop backwards while index >= 0 and current element > temp var
//   Set next element equal to current element
// Set next element equal to temp