import { Component, Input } from '@angular/core';

export type LineSize = 'small' | 'default' | 'big';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.scss']
})
export class LineComponent {
  @Input('size')
  public size: LineSize = 'default';
}
