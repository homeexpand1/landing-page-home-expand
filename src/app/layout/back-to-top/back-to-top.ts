import { isPlatformBrowser } from '@angular/common';
import { Component, HostListener, PLATFORM_ID, inject, signal } from '@angular/core';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.html',
  styleUrl: './back-to-top.css',
})
export class BackToTop {
  private readonly platformId = inject(PLATFORM_ID);
  readonly isShow = signal(false);

  @HostListener('window:scroll')
  checkScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    this.isShow.set(window.scrollY >= 100);
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0 });
  }
}
