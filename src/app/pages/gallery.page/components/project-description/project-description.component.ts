import { Component, input, output } from '@angular/core';
import { SectionDirective } from 'src/app/directives/section.directive';

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
  readonly data = input.required<any>();
  readonly close = output<void>()
  closeModal() {
    this.close.emit();
  }
}
