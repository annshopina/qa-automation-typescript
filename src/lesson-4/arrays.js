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

