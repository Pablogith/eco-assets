import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from '@core/interceptors';
import { NotificationDirective } from '@core/directives';

@NgModule({
  declarations: [NotificationDirective],
  imports: [HttpClientModule, BrowserModule, BrowserAnimationsModule],
  exports: [NotificationDirective],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'Core module has already been loaded. Import the core modules in AppModule only.'
      );
    }
  }
}
