import { Component, ViewEncapsulation } from '@angular/core';
import { LOREM_IPSUM } from 'src/app/consts';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ContactSectionComponent {
  public description = LOREM_IPSUM.concat(LOREM_IPSUM);
}
