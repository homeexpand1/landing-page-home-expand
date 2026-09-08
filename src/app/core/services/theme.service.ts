import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, computed, effect, inject, signal } from '@angular/core';

export type ThemeMode = 'light' | 'dark';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  readonly mode = signal<ThemeMode>('light');
  readonly isDark = computed(() => this.mode() === 'dark');

  constructor() {
    if (!this.isBrowser) {
      return;
    }

    const stored = localStorage.getItem('theme-mode');
    if (stored === 'dark' || stored === 'light') {
      this.mode.set(stored);
    }

    this.apply(this.mode());

    effect(() => {
      this.apply(this.mode());
    });
  }

  toggle(): void {
    this.mode.update((mode) => (mode === 'dark' ? 'light' : 'dark'));
  }

  private apply(mode: ThemeMode): void {
    if (!this.isBrowser) {
      return;
    }

    document.documentElement.classList.toggle('dark', mode === 'dark');
    localStorage.setItem('theme-mode', mode);
  }
}
