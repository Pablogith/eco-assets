import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from '@shared/layout/layout.component';
import { CoreModule } from '@core/core.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '@store/reducers/auth.reducers';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({
      auth: authReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
