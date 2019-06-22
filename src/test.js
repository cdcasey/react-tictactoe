// Array is 8 elements, 4 elements wide and
// two elements deep
// const theArr = new Array(8).fill(null);
const theArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const matrixWidth = 7;
for (let i = 0; i < theArr.length; i++) {
  const element = theArr[i];
  const col = i % matrixWidth;
  const row = Math.floor(i / matrixWidth);
  console.log(col, row);
  console.log(getIndexByCoordinate(col, row));
}

function getIndexByCoordinate(col, row) {
  return row * matrixWidth + col;
}
