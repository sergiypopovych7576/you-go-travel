import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeatureComponent {
  @Input()
  public icon: string = '';
}
