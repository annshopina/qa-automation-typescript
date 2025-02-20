// api.ts
import axios from "axios";
import { ApiResponse } from "./models";

export async function fetchData(): Promise<ApiResponse> {
    const response = await axios.get<ApiResponse>("https://jsonplaceholder.typicode.com/posts/1");
    return response.data;
}
