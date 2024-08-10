import { Injectable } from '@angular/core';
import { Observable, catchError, of, throwError } from 'rxjs';
import { MarkdownEntry } from '../model/markdown.entry.model';
import * as yaml from 'js-yaml';
import { MarkdownMetadata } from '../model/markdown.metadata.model';
import { MarkdownFile } from '../model/markdown-file.model';


@Injectable({ providedIn: 'root' })
export class ContentService {
    private blogPostFiles: MarkdownFile[] = __POST_FILES__;
    private projectFiles: MarkdownFile[] = __PROJECT_FILES__;
    blogPosts: MarkdownEntry[] = [];
    projects: MarkdownEntry[] = [];

    constructor() {
        this.blogPosts = this.processMarkdownFiles(this.blogPostFiles);
        this.projects = this.processMarkdownFiles(this.projectFiles);
    }

    private processMarkdownFiles(files: MarkdownFile[]): MarkdownEntry[] {
        return files.map(x => {
            const parts = x.content.split(/\n---\n|\n\n---/);
            const markdownContent = parts[1]?.trim() || '';

            let metadata: MarkdownMetadata = { ...emptyPost.metadata };
            try {
                const yamlString = parts[0]?.trim() || '';
                if (yamlString) {
                    metadata = yaml.load(yamlString) as MarkdownMetadata;
                }
            } catch (e) {
                console.error('Error parsing YAML front matter:', e);
            }

            return { metadata, content: markdownContent };
        });
    }

    getPosts(): Observable<MarkdownEntry[]> {
        return of(this.blogPosts);
    }

    getProjects(): Observable<MarkdownEntry[]> {
        return of(this.projects);
    }

    getPost(slug: string): Observable<MarkdownEntry> {
        const post = this.blogPosts.find(x => x.metadata.slug === slug)
        return of(post);
    }

    getProject(slug: string): Observable<MarkdownEntry> {
        const project = this.projects.find(x => x.metadata.slug === slug)
        return of(project);
    }
}


export const emptyPost: MarkdownEntry = {
    content: '',
    metadata: {
        readLength: 0,
        excerpt: '',
        title: '',
        slug: '',
        category: '',
        author: '',
        date: null,
    },
};