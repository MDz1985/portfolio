import { Component, input } from '@angular/core';
import { ProjectGroup } from 'src/app/models/interfaces/project.interface';
import { ProjectItemComponent } from 'src/app/pages/gallery.page/components/project-item/project-item.component';

@Component({
  selector: 'app-project-group',
  standalone: true,
  imports: [
    ProjectItemComponent
  ],
  templateUrl: './project-group.component.html',
  styleUrl: './project-group.component.scss'
})
export class ProjectGroupComponent {
  readonly groupData = input.required<ProjectGroup>();


}
