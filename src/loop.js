const getIndex = () => {
  const indexArr = [];
  let current = 0;
  for (let i = current; current < 21; i++) {
    indexArr.push(current);
    if (i % 2 == 0) {
      current += 3;
    } else {
      current += 1;
    }
    console.log(current);
  }
  console.log(indexArr);
};
getIndex()