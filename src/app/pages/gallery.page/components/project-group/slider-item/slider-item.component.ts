import { Component, input } from '@angular/core';
import { Project } from 'src/app/models/interfaces/project.interface';

@Component({
  selector: 'app-slider-item',
  standalone: true,
  imports: [],
  templateUrl: './slider-item.component.html',
  styleUrl: './slider-item.component.scss'
})
export class SliderItemComponent {
  projectData = input.required<Project>();
}
