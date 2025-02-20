// index.ts
import { fetchData } from "./api";
import { Summary } from "./models";
import { PostSummary } from "./abstraction";

async function main() {
    const data = await fetchData();

    console.log("Повний JSON-відповідь:", data);

    // Перетворення у новий об'єкт
    const summary = new Summary(data);
    summary.print();

    // Використання абстракції
    const postSummary = new PostSummary(data.id, data.title);
    postSummary.print();
}

main();
