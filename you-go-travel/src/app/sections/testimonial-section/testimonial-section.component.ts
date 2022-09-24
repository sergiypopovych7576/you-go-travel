import { Component } from '@angular/core';
import { LOREM_IPSUM } from 'src/app/consts';

@Component({
  selector: 'app-testimonial-section',
  templateUrl: './testimonial-section.component.html',
  styleUrls: ['./testimonial-section.component.scss']
})
export class TestimonialSectionComponent {
  public blockquote = LOREM_IPSUM;
}
