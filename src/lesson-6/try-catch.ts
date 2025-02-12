import axios from "axios";

const primaryUrl = "https://nonexistent.com/api";
const fallbackUrl = "https://learngitbranching.js.org/";

async function fetchData() {
    try {
        console.log("Sending request to main resource");
        const response = await axios.get(primaryUrl);
        return response.data;
    } catch (error) {
        console.warn("Sending request to fallback resource");

        try {
            const fallbackResponse = await axios.get(fallbackUrl);
            return fallbackResponse.data;
        } catch (fallbackError) {
            throw new Error("Both resources are unavailable");
        }
    }
}

// Виконання функції
fetchData()
    .then((data) => console.log("Успішна відповідь:", data))
    .catch((err) => console.error("Помилка:", err.message));
