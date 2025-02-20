// async-await.ts

async function fetchData(url: string): Promise<any> {
    try {
        const response = await fetch(url); // Очікуємо відповідь від сервера
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return await response.json(); // Очікуємо перетворення у JSON
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

function processData(data: any): void {
    console.log("Data:", data);
}

async function main() {
    try {
        const data = await fetchData("https://jsonplaceholder.typicode.com/todos/1");
        processData(data);
    } catch (error) {
        console.error("Error:", error);
    }
}

main();
