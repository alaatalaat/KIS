import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[SetCardStyle]'
})
export class SetCardStyleInMenuComDirective {
  @Input('SetCardStyle') color:string = "white";
  constructor(private eleRef:ElementRef) {
    this.eleRef.nativeElement.style.border=`1px solid #F99E22`;
    this.eleRef.nativeElement.style.background=`#F99E22`;
    this.eleRef.nativeElement.style.color="#Fff";
    this.eleRef.nativeElement.style.fontWeight="bold";
    this.eleRef.nativeElement.style.textAlign="center";
  }

  @HostListener('mouseover') onmouseover(){
    this.eleRef.nativeElement.style.background="#fff";
    this.eleRef.nativeElement.style.color=`${this.color}`;
  }

  @HostListener('mouseleave') onmouseleave(){
    this.eleRef.nativeElement.style.background=`${this.color}`;
    this.eleRef.nativeElement.style.color="#fff";
  }

}
