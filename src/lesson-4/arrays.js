const stringArray = ['cat', 'dog', 'mouse'];
stringArray.forEach((element, index) => {
    console.log('Current value = ' + element,  'Current position = ' + index);
});

const stringArrayNew = stringArray.map(element => element.toUpperCase());
stringArrayNew.forEach(elementNew => console.log('New value = '+ elementNew));


const numberArray = [10, 20, 30];
numberArray.forEach((element, index) => {
    console.log('Current value = ' + element,' Current position = ' + index);
});

const numberArrayNew = numberArray.map(element => element * 2);
numberArrayNew.forEach(elementNew => console.log('New value = '+ elementNew));


const booleanArray = [true, false, true, false];
booleanArray.forEach((element, index) => {
    console.log('Current value = ' + element, 'Current position = ' + index);
});
const booleanArrayNew = booleanArray.map(element => element.toString().toUpperCase());

booleanArrayNew.forEach((elementNew, index) => {
    console.log('New value = ' + elementNew, 'Current position = ' + index);
});

const anyArray = ['text', 100, false, true];
anyArray.forEach((element, index) => {
    console.log('Current value = ' + element, 'Current position = ' + index);
});

const anyArrayNew = anyArray.map(element => element.toString().toUpperCase());
anyArrayNew.forEach((elementNew, index) => {
    console.log('New value = ' + elementNew, 'Current position = ' + index);
});

const number2Array = [6,7,8];
const combinedArray = numberArray.concat(number2Array);
console.log('concat:', combinedArray);

number2Array.push(2);
console.log('Executed push:', number2Array);

const lastElement = booleanArray.pop();
console.log('Executed pop:', lastElement);

const sliced = stringArray.slice(1, 3);
console.log('Executed slice (1, 3):', sliced);

const filterNumbers = numberArray.filter(num => num >= 10 && num <= 22);
console.log('filter (even):', filterNumbers);

const findElement = numberArray.find(num => num > 5);
console.log('find (>3):', findElement);

const sumNumber = numberArray.reduce((acc, curr) => acc + curr, 0);
console.log('Executed reduce:', sumNumber);

const arraySpread = [...anyArray];
console.log('Executed spread:', arraySpread);
