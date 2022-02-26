export class Blog {
    id: number;
    title: string;
    content: string;
    image: ImageBlog;
    created_at: string;
    updated_at: string;
}

export class ImageBlog {
    url: string;
}