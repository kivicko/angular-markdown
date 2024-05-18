import { BlogPostMetadata } from "./blog-post.metadata.model";

export interface BlogPost {
    content: string;
    metadata: BlogPostMetadata;
}