import { Component } from '@angular/core';
import { contactInfo } from '../../../../core/constants/contact-info';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-final-cta',
  imports: [Icon],
  templateUrl: './final-cta.html',
})
export class FinalCta {
  readonly contact = contactInfo;
}
