import { Component, inject } from '@angular/core';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { HeaderComponent } from 'src/app/common/header/header.component';
import { slideInAnimation } from 'src/app/animations/slider.animation';
import { FooterComponent } from 'src/app/common/footer/footer.component';
import { ModalStore } from 'src/app/store/modal.store';
import { ProjectDescriptionComponent } from 'src/app/pages/gallery.page/components/project-description/project-description.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderComponent, FooterComponent, ProjectDescriptionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  animations: [slideInAnimation]
})
export class AppComponent {
  title = 'portfolio';
  private contexts = inject(ChildrenOutletContexts);
  private readonly _store = inject(ModalStore);
  projectDescription = this._store.data;

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }

  closeModal() {
    this._store.setData();
  }
}
