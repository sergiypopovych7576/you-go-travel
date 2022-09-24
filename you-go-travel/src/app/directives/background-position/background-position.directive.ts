import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[appBackgroundPosition]',
  host: {'(window:scroll)': 'onScroll($event)'}
})
export class BackgroundPositionDirective {
  private _currentBackgroundPosition: number = 35;
  private _scrollYPosition: number = 0;
  
  constructor(private readonly _el: ElementRef, @Inject(DOCUMENT) private _document: Document) { 
    this._el.nativeElement.style.backgroundPositionX = '50%';
    this._el.nativeElement.style.backgroundPositionY = '35%'; 
  }

  public onScroll(event: any): void {
    // TODO:
    
    // const currentPosition = this._document.documentElement.scrollTop;
    // if(this._scrollYPosition === 0) {
    //   this._scrollYPosition = currentPosition;
    //   return;
    // }
    // const res = currentPosition > this._scrollYPosition ? 1 : -1;
    // this._currentBackgroundPosition = this._currentBackgroundPosition - res;
    // this._el.nativeElement.style.backgroundPositionY = `${this._currentBackgroundPosition}%`;
  }
}
