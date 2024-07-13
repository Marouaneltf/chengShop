import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private defaultTheme = '#f6f0e7';
  themeChanged = new Subject<string>();

  getTheme(): string {
    const storedTheme = localStorage.getItem('theme');
    return storedTheme || this.defaultTheme;
  }

  toggleTheme() {
    const currentTheme = this.getTheme();
    const newTheme = currentTheme === '#f6f0e7' ? 'dark' : '#f6f0e7';
    localStorage.setItem('theme', newTheme);
    this.themeChanged.next(newTheme);
  }
}
