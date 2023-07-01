//
// removeItem.js
//
// função removeItem(arr, item) recebe um array arr 
// e retorna uma cópia desse array sem o elemento 
// item, caso ele exista no array.
//
function removeItem(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

module.exports = removeItem;
