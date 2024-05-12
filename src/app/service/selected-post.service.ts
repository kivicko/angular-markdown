import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BlogPost } from '../model/blog-post.model';

@Injectable({
  providedIn: 'root'
})
export class SelectedPostService {
  private selectedPostSubject = new BehaviorSubject<BlogPost | null>(null);
  selectedPost$ = this.selectedPostSubject.asObservable();

  setSelectedPost(post: BlogPost) {
    this.selectedPostSubject.next(post);
  }

  constructor() { }

}
