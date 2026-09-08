import { KeyValuePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { contactInfo, legalLinks } from '../../core/constants/contact-info';
import { socialMedia } from '../../core/constants/social-media';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, KeyValuePipe, Icon],
  templateUrl: './footer.html',
})
export class Footer {
  readonly socialMedia = socialMedia;
  readonly contactInfo = contactInfo;
  readonly legalLinks = legalLinks;
  readonly year = signal(new Date().getFullYear());
}
