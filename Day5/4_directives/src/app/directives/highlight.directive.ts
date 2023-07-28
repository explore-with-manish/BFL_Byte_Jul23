// import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[highlight]',
// })
// export class HighlightDirective implements OnInit {
//   constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { }
  
//   ngOnInit(): void {
//     this.renderer.listen(this.element.nativeElement, 'mouseenter', () => {
//       this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
//     });

//     this.renderer.listen(this.element.nativeElement, 'mouseleave', () => {
//       this.renderer.removeStyle(this.element.nativeElement, 'background-color');
//     });
//   }
// }

// ----------------------------------------------------------------------
// import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// @Directive({
//   selector: '[highlight]',
// })
// export class HighlightDirective {
//   constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { }
  
//   @HostListener('mouseenter')
//   onMouseEnter() { 
//     this.renderer.setStyle(this.element.nativeElement, 'background-color', 'yellow');
//   }

//   @HostListener('mouseleave')
//   onMouseLeave() {
//     this.renderer.removeStyle(this.element.nativeElement, 'background-color');
//   }
// }

// ----------------------------------------------------------------------
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]',
})
export class HighlightDirective {
  // @Input() highlightColor: string = 'yellow';
  @Input('highlight') highlightColor: string = 'yellow';

  constructor(private element: ElementRef<HTMLElement>, private renderer: Renderer2) { }
  
  @HostListener('mouseenter')
  onMouseEnter() { 
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.highlightColor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.removeStyle(this.element.nativeElement, 'background-color');
  }
}
