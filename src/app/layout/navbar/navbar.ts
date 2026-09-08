import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  PLATFORM_ID,
  inject,
  signal,
} from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';
import { contactInfo } from '../../core/constants/contact-info';
import { navLinks } from '../../core/constants/landing-content';
import { ThemeService } from '../../core/services/theme.service';
import { Icon } from '../../shared/components/icon/icon';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, Icon],
  templateUrl: './navbar.html',
})
export class Navbar {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly router = inject(Router);
  readonly theme = inject(ThemeService);

  readonly links = navLinks;
  readonly whatsappLink = contactInfo.whatsappLink;
  readonly isMobileMenuOpen = signal(false);

  constructor() {
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this.closeMobileMenu();
    });
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen.update((open) => !open);
    this.syncBodyScroll();
  }

  closeMobileMenu(): void {
    if (!this.isMobileMenuOpen()) {
      return;
    }
    this.isMobileMenuOpen.set(false);
    this.syncBodyScroll();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.closeMobileMenu();
  }

  private syncBodyScroll(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    document.body.style.overflow = this.isMobileMenuOpen() ? 'hidden' : '';
  }
}
