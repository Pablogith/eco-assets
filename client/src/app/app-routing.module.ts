import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('@pages/home-page/home-page.component').then(c => c.HomePageComponent)
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-in',
        loadComponent: () => import('@pages/sign-in/sign-in.component').then(c => c.SignInComponent)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
