import { Component } from '@angular/core';
import { MyStoryComponent } from "../my-story/my-story.component";
import { BlogPostListComponent } from "../blog-post-list/blog-post-list.component";
import { MyProjectsComponent } from "../project-list/my-projects.component";
import { HomeIntroductionComponent } from "../home-introduction/home-introduction.component";

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  imports: [MyStoryComponent, BlogPostListComponent, MyProjectsComponent, HomeIntroductionComponent]
})
export class HomeComponent {

}
