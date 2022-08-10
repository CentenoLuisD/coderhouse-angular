import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSetsize20]'
})
export class Setsize20Directive {

  constructor(private elemento: ElementRef) { }

  ngOnInit(): void {
    this.elemento.nativeElement.style.fontSize= '20px';
  }

}
