

const arrayNum = [11, 3, 4, 11, 4, 7, 3];
function unique(arrayNum) {
  const result = [];

  for (const i of arrayNum) {
    let noRepeat = true;

    for (const j of result) {
      if (i === j) {
        noRepeat = false;
        break;
      }
    }
    if (noRepeat) {
      result.push(i);
    }
  }
  return result;
}
console.log(`Given array : 11, 3, 4, 11, 4, 7, 3`);
console.log(`After removing Duplicate Element :  ${unique(arrayNum)}`);
