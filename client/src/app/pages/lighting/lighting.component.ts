import { Component } from '@angular/core';
import { SharedModule } from '@shared/shared.module';

@Component({
  selector: 'eac-lighting',
  templateUrl: './lighting.component.html',
  styleUrls: ['./lighting.component.scss'],
  standalone: true,
  imports: [SharedModule],
})
export class LightingComponent {}
