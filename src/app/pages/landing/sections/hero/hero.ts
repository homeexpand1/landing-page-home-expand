import { Component } from '@angular/core';
import { contactInfo } from '../../../../core/constants/contact-info';
import { Icon } from '../../../../shared/components/icon/icon';

@Component({
  selector: 'app-hero',
  imports: [Icon],
  templateUrl: './hero.html',
})
export class Hero {
  readonly whatsappLink = contactInfo.whatsappLink;
}
