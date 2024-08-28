import { Component, computed, input, output } from '@angular/core';
import { SectionDirective } from 'src/app/directives/section.directive';
import { Project } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'app-project-description',
  standalone: true,
  imports: [
    SectionDirective
  ],
  templateUrl: './project-description.component.html',
  styleUrl: './project-description.component.scss',
})
export class ProjectDescriptionComponent {
  readonly data = input.required<Project>();
  readonly image = computed<string>(() => this.data().image.main[0] ?? this.data().image.slider);
  readonly close = output<void>();

  closeModal() {
    this.close.emit();
  }
}
