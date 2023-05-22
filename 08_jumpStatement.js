




for (let index = 1; index <=10; index++) {
    console.log(`${index}`);
    if (index==5) {
        break;
    }
}
console.log(`End loop`);

var iteration = 0;
for (let index = 1; index <=10; index++) {
    iteration = iteration + 1;
    console.log(`Iteration start- ${iteration}`);
    console.log(`${index}`);
    if (index==5) {
        continue;
    }
    console.log(` Iteration end - ${iteration}`);
}
console.log(`End loop`);