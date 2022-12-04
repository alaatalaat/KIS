import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appChangeTextColor]'
})
export class ChangeTextColorDirective {


  @HostListener('mouseover') onmouseover(){
    this.changeColor('#F99E22');

  }
  @HostListener('mouseleave') onmouseenter(){
    this.changeColor('#302CA2');

  }
  constructor(private renderer:Renderer2,private el:ElementRef) { }

  changeColor(color:string){
    this.renderer.setStyle(this.el.nativeElement,'color',color);
  }

}
