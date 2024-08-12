import { Component } from '@angular/core';
import { SectionDirective } from 'src/app/directives/section.directive';
import { PERSONAL_INFO } from 'src/app/data/personal-info';

@Component({
  selector: 'app-about.page',
  standalone: true,
  imports: [
    SectionDirective
  ],
  templateUrl: './about.page.component.html',
  styleUrl: './about.page.component.scss',
})
export class AboutPageComponent {
  readonly personalInfo = PERSONAL_INFO
}
