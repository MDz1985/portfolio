import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
register();

const SlIDES_COUNT = 5;

@Component({
  selector: 'app-certificates.page',
  standalone: true,
  imports: [],
  templateUrl: './certificates.page.component.html',
  styleUrl: './certificates.page.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CertificatesPageComponent {
  protected readonly array: null[] = Array(SlIDES_COUNT);
}
