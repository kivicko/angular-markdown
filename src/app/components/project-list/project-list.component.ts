import { Component, OnInit } from '@angular/core';
import { MarkdownEntry } from '../../model/markdown.entry.model';
import { ContentService } from '../../service/content.service';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.css'
})
export class ProjectListComponent implements OnInit {
  public projects: MarkdownEntry[];

  constructor(private contentService: ContentService) { }

  ngOnInit(): void {
    this.contentService.getProjects().subscribe(data => {
      this.projects = data
    });
  }

}
