import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('./pages/about.page/about.page.component').then(c => c.AboutPageComponent),
    data: { animation: 'AboutPage' },
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/skills.page/skills.page.component').then(c => c.SkillsPageComponent),
    data: { animation: 'SkillsPage' },
  },
  {
    path: 'certificates',
    loadComponent: () => import('./pages/certificates.page/certificates.page.component').then(c => c.CertificatesPageComponent),
    data: { animation: 'CertificatesPage' },
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery.page/gallery.page.component').then(c => c.GalleryPageComponent),
    data: { animation: 'GalleryPage' },
  },
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full',
    data: { animation: 'main' },
  },
  {
    path: '**',
    redirectTo: 'about',
  },
];
