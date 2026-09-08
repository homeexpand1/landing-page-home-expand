import { Component, signal } from '@angular/core';
import { contactInfo } from '../../../../core/constants/contact-info';
import { faqs } from '../../../../core/constants/landing-content';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-faq',
  imports: [SectionHeader, Icon],
  templateUrl: './faq.html',
})
export class Faq {
  readonly faqs = faqs;
  readonly whatsappLink = contactInfo.whatsappLink;
  readonly openIndex = signal<number | null>(0);

  isOpen(index: number): boolean {
    return this.openIndex() === index;
  }

  toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
