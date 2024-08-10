import { Component } from '@angular/core';
import { MyStoryComponent } from "../my-story/my-story.component";
import { BlogPostListComponent } from "../blog-post-list/blog-post-list.component";
import { ProjectListComponent } from "../project-list/project-list.component";
import { HomeIntroductionComponent } from "../home-introduction/home-introduction.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MyStoryComponent, BlogPostListComponent, ProjectListComponent, HomeIntroductionComponent]
})
export class HomeComponent {

}
