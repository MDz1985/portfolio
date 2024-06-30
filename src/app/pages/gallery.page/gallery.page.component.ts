import { Component } from '@angular/core';
import { PROJECTS_DATA } from 'src/app/data/porojects-data';
import { ProjectGroup } from 'src/app/models/interfaces/project.interface';
import { ProjectGroupComponent } from 'src/app/pages/gallery.page/components/project-group/project-group.component';

@Component({
  selector: 'app-gallery.page',
  standalone: true,
  imports: [
    ProjectGroupComponent,
  ],
  templateUrl: './gallery.page.component.html',
  styleUrl: './gallery.page.component.scss'
})
export class GalleryPageComponent {
  readonly projectGroups: ProjectGroup[] = PROJECTS_DATA;
}
