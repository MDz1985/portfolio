import { Component, inject } from '@angular/core';
import { SectionDirective } from 'src/app/directives/section.directive';
import { PERSONAL_INFO } from 'src/app/data/personal-info';
import { DomSanitizer } from '@angular/platform-browser';

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
  private _sanitizer = inject(DomSanitizer);
  readonly personalInfo = PERSONAL_INFO
  readonly about = this._sanitizer.bypassSecurityTrustHtml(PERSONAL_INFO.about)
}
