function sumArray(array: number[]): number;
function sumArray(array: string[]): string;

function sumArray(array: number[] | string[]): number | string {
    if (array.length === 0) {
        throw new Error("Array cannot be empty");
    }

    if (typeof array[0] === "number") {
        return (array as number[]).reduce((acc: number, val: number) => acc + val, 0);
    }

    return (array as string[]).reduce((acc: string, val: string) => acc + val, "");
}
