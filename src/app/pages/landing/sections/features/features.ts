import { Component } from '@angular/core';
import { features } from '../../../../core/constants/landing-content';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-features',
  imports: [SectionHeader, Icon],
  templateUrl: './features.html',
})
export class Features {
  readonly features = features;
}
