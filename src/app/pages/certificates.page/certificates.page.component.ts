import { AfterViewInit, Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, ViewChild } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SectionDirective } from 'src/app/directives/section.directive';
import { SwiperOptions } from 'swiper/types';
register();

const SlIDES_COUNT = 5;
export const SliderParams: SwiperOptions = {
  navigation: true,
  spaceBetween: 10,
  thumbs: {
    swiper: null
  }
};

export const Slider2Params: SwiperOptions = {
  watchSlidesProgress: true,
  slidesPerView: SlIDES_COUNT,
  freeMode: true,
  spaceBetween: 10,
};

@Component({
  selector: 'app-certificates.page',
  standalone: true,
  imports: [
    SectionDirective
  ],
  templateUrl: './certificates.page.component.html',
  styleUrl: './certificates.page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CertificatesPageComponent implements AfterViewInit {
  protected readonly array: null[] = Array(SlIDES_COUNT);
  @ViewChild('slider') private _slider!: ElementRef;
  @ViewChild('slider2') private _slider2!: ElementRef;
  ngAfterViewInit(): void {
    Object.assign(this._slider.nativeElement, SliderParams);
    Object.assign(this._slider2.nativeElement, Slider2Params);
    this._slider.nativeElement.thumbs.swiper = this._slider2.nativeElement;
    this._slider.nativeElement.initialize();
    this._slider2.nativeElement.initialize();
  }
}
