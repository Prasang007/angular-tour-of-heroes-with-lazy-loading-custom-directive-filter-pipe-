import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBannerEffect]'
})
export class BannerEffectDirective {

  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'yellow';
    }

}
