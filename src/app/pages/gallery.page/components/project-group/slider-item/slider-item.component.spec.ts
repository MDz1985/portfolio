import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderItemComponent } from 'src/app/pages/gallery.page/components/project-group/slider-item/slider-item.component';

describe('SliderItemComponent', () => {
  let component: SliderItemComponent;
  let fixture: ComponentFixture<SliderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SliderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
