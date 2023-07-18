


const arryNum = [78,56,43,76,78,32,12,76];
function duplicateNum(arryNum){
const result =[];
for (const i of arryNum) {
    let noRepeat = true;

for (const j of result) { if (i==j) {
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
console.log(`Remove duplicate ele ${duplicateNum(arryNum)}`);