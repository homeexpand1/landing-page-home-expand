import { Component } from '@angular/core';
import { testimonials } from '../../../../core/constants/landing-content';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-testimonials',
  imports: [SectionHeader],
  templateUrl: './testimonials.html',
})
export class Testimonials {
  readonly testimonials = testimonials;
}
