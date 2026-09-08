import { Component } from '@angular/core';
import { benefits } from '../../../../core/constants/landing-content';
import { Icon } from '../../../../shared/components/icon/icon';
import { SectionHeader } from '../../../../shared/components/section-header/section-header';

@Component({
  selector: 'app-benefits',
  imports: [SectionHeader, Icon],
  templateUrl: './benefits.html',
})
export class Benefits {
  readonly benefits = benefits;
}
