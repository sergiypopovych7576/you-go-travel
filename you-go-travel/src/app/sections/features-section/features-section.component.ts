import { Component, ViewEncapsulation } from '@angular/core';
import { LOREM_IPSUM_SHORT } from 'src/app/consts';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FeaturesSectionComponent {
  public features = [
    {
      title: 'Everywhere',
      body: LOREM_IPSUM_SHORT,
      icon: 'public'
    },
    {
      title: 'Fast',
      body: LOREM_IPSUM_SHORT,
      icon: 'speed'
    },
    {
      title: 'Cheap',
      body: LOREM_IPSUM_SHORT,
      icon: 'sell'
    },
    {
      title: 'Safe',
      body: LOREM_IPSUM_SHORT,
      icon: 'health_and_safety'
    },
  ]
}
