export const getIndex = (arr) => {
  const indexArr = [];
  let current = 0;
  for (let i = current; current < arr.length; i++) {
    indexArr.push(current);
    if (i % 2 == 0) {
      current += 3;
    } else {
      current += 1;
    }
  }
  return indexArr;
};
