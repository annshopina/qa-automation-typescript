function sumArray(array) {
    let result = array[0];

    for (let i = 1; i < array.length; i++) {
        result = result + array[i];
    }

    return result;
}
const arrayNumber = [10, 20, 30];


console.log(sumArray(arrayNumber));
console.log(sumArray(['hello', ' ', 'world!']));
