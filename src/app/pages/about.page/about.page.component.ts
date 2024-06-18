import { Component } from '@angular/core';
import { slideInAnimation } from 'src/app/animations/slider.animation';
import { SectionDirective } from 'src/app/directives/section.directive';

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

}
