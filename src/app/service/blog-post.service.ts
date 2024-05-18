import { Injectable } from '@angular/core';
import { Observable, catchError, map, mergeMap, of, throwError } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';
import { HttpClient } from '@angular/common/http'; // For fetching markdown content
import { HttpClientModule } from '@angular/common/http';
import * as yaml from 'js-yaml';
import { BlogPostMetadata } from '../model/blog-post.metadata.model';
import { MarkdownFile } from '../model/markdown-file.model';


@Injectable({ providedIn: 'root' })
export class BlogPostService {
    private markdownFiles: MarkdownFile[] = __MARKDOWN_FILES__;
    blogPosts: BlogPost[] = [];

    constructor(private http: HttpClient) { }

    getPosts(): Observable<MarkdownFile[]> {
        return of(this.markdownFiles);

    }

    getPost(slug: string): Observable<BlogPost> {
        const url = `assets/posts/${slug}.md`;

        return this.http.get(url, { responseType: 'text' }).pipe(
            map(content => {
                const parts = content.split(/\n---\n|\n\n---/);
                const markdownContent = parts[1]?.trim() || '';

                // Parse the YAML string if it exists
                let metadata: BlogPostMetadata = { ...emptyPost.metadata };
                try {
                    const yamlString = parts[0]?.trim() || ''; // Handle potential missing YAML front matter
                    if (yamlString) {
                        metadata = yaml.load(yamlString) as BlogPostMetadata;
                    }
                } catch (e) {
                    console.error('Error parsing YAML front matter:', e);
                }

                // Ensure combined object has the required 'metadata' property
                return { metadata, content: markdownContent };
            }),
            catchError(error => {
                console.error('Error fetching post content:', error);
                return throwError(error); // Handle error appropriately
            })
        );
    }
}


const emptyPost: BlogPost = {
    content: '',
    metadata: {
        readLength: 0,
        excerpt: '',
        title: '',
        slug: '',
        category: '',
        content: '', // You might want to remove this property
        author: '',
        date: null,
    },
};