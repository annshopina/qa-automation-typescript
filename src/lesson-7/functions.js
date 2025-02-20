function sumArray(array) {
    if (array.length === 0) {
        throw new Error("Array cannot be empty");
    }
    if (typeof array[0] === "number") {
        return array.reduce(function (acc, val) { return acc + val; }, 0);
    }
    return array.reduce(function (acc, val) { return acc + val; }, "");
}
var arrayNumber = [10, 20, 30];
var arrayString = ['hello', ' ', 'world!'];
console.log(sumArray(arrayNumber)); // 60
console.log(sumArray(arrayString)); // "hello world!"
