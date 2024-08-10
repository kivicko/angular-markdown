import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { BlogPostListComponent } from "./components/blog-post-list/blog-post-list.component";
import { MyStoryComponent } from "./components/my-story/my-story.component";
import { ProjectListComponent } from "./components/project-list/project-list.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HomeComponent } from "./components/home/home.component";
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, BlogPostListComponent, MyStoryComponent, ProjectListComponent, FooterComponent, HomeComponent, MarkdownModule]
})
export class AppComponent implements OnInit {
  title = 'blog-pure-ng';
  isMobileMenuOpen = false;
  isDarkMode = true;
  localStorage: Storage = null;

  constructor(@Inject(DOCUMENT) private document: Document, private router: Router) {
    this.localStorage = document.defaultView?.localStorage;
    this.themeInit();
  }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  themeInit() {
    if (!this.localStorage) {
      return;
    }
    if (this.localStorage.getItem("theme") === "dark" || (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      this.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      this.isDarkMode = true;
    } else {
      this.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      this.isDarkMode = false;
    }
  }

  themeSwitch() {
    console.log('selam')
    if (!this.localStorage) {
      return;
    }

    if (this.localStorage.getItem("theme") === "dark") {
      this.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
      this.isDarkMode = false;
    } else {
      this.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
      this.isDarkMode = true;
    }
  }

}
