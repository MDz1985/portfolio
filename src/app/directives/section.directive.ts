import { AfterViewInit, Directive, ElementRef, OnInit, inject } from '@angular/core';

@Directive({
  selector: '[appSection]',
  standalone: true
})
export class SectionDirective implements OnInit {
  private _element = inject(ElementRef);

  ngOnInit(): void {
    this._element.nativeElement.classList.add('border', 'rounded-3xl', 'shadow', 'p-10', 'gap-x-10');
  }
}
