import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jr-theme-selector',
  templateUrl: './theme-selector.component.html',
  styleUrls: ['./theme-selector.component.css'],
})
export class ThemeSelectorComponent implements OnInit {
  theme = 'system';
  resolvedTheme = 'light';

  ngOnInit() {
    this.resolveTheme();
  }

  activateMode(mode: string) {
    switch (mode) {
      case 'light':
        // Whenever the user explicitly chooses light mode
        localStorage.setItem('theme', 'light');
        break;
      case 'dark':
        // Whenever the user explicitly chooses dark mode
        localStorage.setItem('theme', 'dark');
        break;
      default:
        // Whenever the user explicitly chooses to respect the OS preference
        localStorage.removeItem('theme');
        break;
    }

    this.resolveTheme();
  }

  private resolveTheme() {
    this.theme = localStorage.getItem('theme') || 'system';

    if (
      localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      this.resolvedTheme = 'dark';
      document.documentElement.classList.toggle('dark', true);
      document.documentElement.classList.toggle('light', false);
    } else {
      this.resolvedTheme = 'light';
      document.documentElement.classList.toggle('dark', false);
      document.documentElement.classList.toggle('light', true);
    }
  }
}
