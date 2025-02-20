// models.ts
export interface ApiResponse {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export class Summary {
    id: number;
    title: string;

    constructor(data: ApiResponse) {
        this.id = data.id;
        this.title = data.title;
    }

    print(): void {
        console.log(`ID: ${this.id}, Title: ${this.title}`);
    }
}
