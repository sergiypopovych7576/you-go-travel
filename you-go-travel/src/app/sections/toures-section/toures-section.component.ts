import { Component, ViewEncapsulation } from '@angular/core';
import { LOREM_IPSUM_SHORT } from 'src/app/consts';

@Component({
  selector: 'app-toures-section',
  templateUrl: './toures-section.component.html',
  styleUrls: ['./toures-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TouresSectionComponent {
  public features = [
    {
      title: 'First',
      img: '/assets/img/toures/dust.jpg',
      body: LOREM_IPSUM_SHORT
    },
    {
      title: 'Second',
      img: '/assets/img/toures/bridge.jpg',
      body: LOREM_IPSUM_SHORT
    },
    {
      title: 'Third',
      img: '/assets/img/toures/sea.jpg',
      body: LOREM_IPSUM_SHORT
    },
  ]
}
