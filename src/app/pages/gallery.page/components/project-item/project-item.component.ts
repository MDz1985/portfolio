import { Component, inject, input } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project.interface';
import { ProjectDescriptionComponent } from 'src/app/pages/gallery.page/components/project-description/project-description.component';
import { ModalStore } from 'src/app/store/modal.store';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [
    ProjectDescriptionComponent
  ],
  templateUrl: './project-item.component.html',
  styleUrl: './project-item.component.scss'
})
export class ProjectItemComponent {
  private readonly _store = inject(ModalStore);
  projectData = input.required<Project>();

  showDescription() {
    this._store.setData(this.projectData());
  }
}
