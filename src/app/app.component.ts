import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private themeService: ThemeService) {}

  ngOnInit(): void {
    const element = document.body;
    this.updateBodyTheme(element, this.themeService.getTheme());

    this.themeService.themeChanged.subscribe((newTheme) => {
      this.updateBodyTheme(element, newTheme);
    });
  }

  private updateBodyTheme(element: HTMLElement, theme: string): void {
    element.dataset['bsTheme'] = theme;
    if (theme === 'light') {
      element.style.backgroundColor = 'light';
    } else {
      element.style.backgroundColor = ''; // Reset to default or specify dark mode color
    }
  }
}
