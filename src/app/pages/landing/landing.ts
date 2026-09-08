import { Component } from '@angular/core';
import { Benefits } from './sections/benefits/benefits';
import { Faq } from './sections/faq/faq';
import { Features } from './sections/features/features';
import { FinalCta } from './sections/final-cta/final-cta';
import { Hero } from './sections/hero/hero';
import { HowItWorks } from './sections/how-it-works/how-it-works';
import { Testimonials } from './sections/testimonials/testimonials';
import { Trust } from './sections/trust/trust';

@Component({
  selector: 'app-landing',
  imports: [
    Hero,
    Trust,
    Features,
    HowItWorks,
    Benefits,
    Testimonials,
    Faq,
    FinalCta,
  ],
  templateUrl: './landing.html',
})
export class Landing {}
