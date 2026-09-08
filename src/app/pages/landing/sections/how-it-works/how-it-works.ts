import { Component } from '@angular/core';
import { steps } from '../../../../core/constants/landing-content';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-how-it-works',
  imports: [SectionHeader],
  templateUrl: './how-it-works.html',
})
export class HowItWorks {
  readonly steps = steps;
}
