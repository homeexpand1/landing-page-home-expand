import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.html',
})
export class SectionHeader {
  label = input<string>('');
  title = input.required<string>();
  lead = input<string>('');
  headingLevel = input<'h1' | 'h2'>('h2');
  align = input<'start' | 'center'>('start');
}
