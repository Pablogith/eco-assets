import { Component, Input } from '@angular/core';

@Component({
  selector: 'eac-title[title]',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent {
  @Input() title = '';
}
