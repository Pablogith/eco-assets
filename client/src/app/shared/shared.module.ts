import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from '@shared/title/title.component';

@NgModule({
  declarations: [TitleComponent],
  imports: [CommonModule],
  exports: [TitleComponent],
})
export class SharedModule {}
