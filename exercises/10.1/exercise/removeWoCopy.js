
function removeWoCopy(arr, item) {
  for (let index = 0, len = arr.length; index < len; index += 1) {
    if (arr[index] === item) {
      arr.splice(index, 1);
      index -= 1;
      len -= 1;
    }
  }

  return arr;
}

console.log(removeWoCopy([1, 2, 3, 4], 5))

module.exports = removeWoCopy;