// abstraction.ts

export abstract class BaseEntity {
    abstract print(): void;
}

export class PostSummary extends BaseEntity {
    id: number;
    title: string;

    constructor(id: number, title: string) {
        super();
        this.id = id;
        this.title = title;
    }

    print(): void {
        console.log(`Post ID: ${this.id}, Title: ${this.title}`);
    }
}
