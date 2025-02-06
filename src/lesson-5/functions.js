function sumArray(array) {
    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        result = result + array[i];
    }

    return result;
}
const arrayString = ['hello', ' ', 'world!'];
const arrayNumber = [10, 20, 30];
const sum = sumArray(arrayNumber);
const sumString = sumArray(arrayString);

console.log(sum);
console.log(sumString);
