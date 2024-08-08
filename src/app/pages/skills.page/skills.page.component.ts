import { Component } from '@angular/core';
import { SectionDirective } from 'src/app/directives/section.directive';
import { SKILLS_DATA } from 'src/app/data/skills.data';

@Component({
  selector: 'app-skills.page',
  standalone: true,
  imports: [
    SectionDirective
  ],
  templateUrl: './skills.page.component.html',
  styleUrl: './skills.page.component.scss'
})
export class SkillsPageComponent {
  readonly skillsGroups = SKILLS_DATA;
}
