import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';

enum MENU_ITEMS {
  ABOUT = 'about',
  SKILLS = 'skills',
  CERTIFICATES = 'certificates',
  GALLERY = 'gallery'
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  router = inject(Router);
  activeRoute = signal<string>('');
  readonly menuItems = Object.values(MENU_ITEMS);

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(() => {
        const activeLink = this.router.routerState.root.firstChild?.snapshot.url.join('/');
        if (activeLink) {
          this.activeRoute.set(activeLink);
        }
      });
  }
}
