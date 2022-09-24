import { Component } from '@angular/core';
import { LOREM_IPSUM } from 'src/app/consts';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent {
  public description = LOREM_IPSUM;
}
