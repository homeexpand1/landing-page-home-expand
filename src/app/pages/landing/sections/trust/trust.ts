import { Component } from '@angular/core';
import { trustStats } from '../../../../core/constants/landing-content';

@Component({
  selector: 'app-trust',
  templateUrl: './trust.html',
})
export class Trust {
  readonly stats = trustStats;
}
