import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('@pages/home-page/home-page.component').then(
        c => c.HomePageComponent
      ),
    canActivate: [AuthGuard],
    title: 'Home',
  },
  {
    path: 'analytics',
    loadComponent: () =>
      import('@pages/analytics/analytics.component').then(
        c => c.AnalyticsComponent
      ),
    canActivate: [AuthGuard],
    title: 'Analytics',
  },
  {
    path: 'batteries',
    loadComponent: () =>
      import('@pages/batteries/batteries.component').then(
        c => c.BatteriesComponent
      ),
    canActivate: [AuthGuard],
    title: 'Batteries',
    children: [
      {
        path: 'details/:id',
        loadComponent: () =>
          import('@pages/batteries-details/batteries-details.component').then(
            c => c.BatteriesDetailsComponent
          ),
        canActivate: [AuthGuard],
        title: 'Batteries Details',
      },
    ],
  },
  {
    path: 'lighting',
    loadComponent: () =>
      import('@pages/lighting/lighting.component').then(
        c => c.LightingComponent
      ),
    canActivate: [AuthGuard],
    title: 'Lighting',
  },
  {
    path: 'profile',
    loadComponent: () =>
      import('@pages/profile/profile.component').then(c => c.ProfileComponent),
    canActivate: [AuthGuard],
    title: 'Profile',
  },
  {
    path: 'settings',
    loadComponent: () =>
      import('@pages/settings/settings.component').then(
        c => c.SettingsComponent
      ),
    canActivate: [AuthGuard],
    title: 'Settings',
  },
  {
    path: 'auth',
    children: [
      {
        path: 'sign-in',
        loadComponent: () =>
          import('@pages/sign-in/sign-in.component').then(
            c => c.SignInComponent
          ),
        title: 'Sign In',
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('@pages/sign-up/sign-up.component').then(
            c => c.SignUpComponent
          ),
        title: 'Sign Up',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
