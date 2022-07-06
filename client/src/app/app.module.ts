import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from '@shared/layout/layout.component';
import { CoreModule } from '@core/core.module';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from '@store/reducers/auth.reducers';
import { SharedModule } from '@shared/shared.module';
import { uiReducer } from '@store/reducers/ui.reducers';
import { APP_CONFIG, APP_CONFIG_VALUE } from '@config/app.config';

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [
    CommonModule,
    CoreModule,
    AppRoutingModule,
    StoreModule.forRoot({
      auth: authReducer,
      ui: uiReducer,
    }),
    SharedModule,
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: APP_CONFIG_VALUE,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
