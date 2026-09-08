import { Component, input } from '@angular/core';

@Component({
  selector: 'app-icon',
  template: `
    <span
      class="icon-mask"
      [class]="svgClass()"
      [style.mask-image]="'url(' + src() + ')'"
      [style.-webkit-mask-image]="'url(' + src() + ')'"
      aria-hidden="true"
    ></span>
  `,
})
export class Icon {
  src = input.required<string>();
  svgClass = input('h-5 w-5');
}
