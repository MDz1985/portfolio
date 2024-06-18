import { Component, input } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  readonly projectData = input.required<Project>();
}
