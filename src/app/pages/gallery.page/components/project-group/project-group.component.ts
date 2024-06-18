import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, ViewChild } from '@angular/core';
import { ProjectGroup } from 'src/app/models/interfaces/project.interface';
import { ProjectItemComponent } from 'src/app/pages/gallery.page/components/project-item/project-item.component';
import { register } from 'swiper/element/bundle';
import { SwiperOptions } from 'swiper/types';
import { SectionDirective } from 'src/app/directives/section.directive';

register();

export const SliderParams: SwiperOptions = {
  effect: 'cards',
  grabCursor: true,
  thumbs: {
    swiper: null
  }
};

export const Slider2Params: SwiperOptions = {
  watchSlidesProgress: true,
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 4,
  direction: 'vertical',
};

@Component({
  selector: 'app-project-group',
  standalone: true,
  imports: [
    ProjectItemComponent,
    SectionDirective
  ],
  templateUrl: './project-group.component.html',
  styleUrl: './project-group.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ProjectGroupComponent implements AfterViewInit {
  @ViewChild('slider') private _slider!: ElementRef;
  @ViewChild('slider2') private _slider2!: ElementRef;
  groupData = input.required<ProjectGroup>();

  ngAfterViewInit(): void {
    Object.assign(this._slider.nativeElement, SliderParams);
    Object.assign(this._slider2.nativeElement, Slider2Params);
    this._slider.nativeElement.thumbs.swiper = this._slider2.nativeElement;
    this._slider.nativeElement.initialize();
    this._slider2.nativeElement.initialize();
  }
}
