import { MarkdownMetadata } from "./markdown.metadata.model";

export interface MarkdownEntry {
    content: string;
    metadata: MarkdownMetadata;
}