function fetchData(url: string): Promise<any> {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        });
}


function processData(data: any): void {
    console.log("Data:", data);
}


fetchData("https://jsonplaceholder.typicode.com/todos/1")
    .then(processData)
    .catch(error => console.error("Error:", error));
