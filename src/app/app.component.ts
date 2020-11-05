import {Component, HostBinding} from '@angular/core';
import {NavigationEnd, Router, RouterEvent, RouterOutlet} from '@angular/router';
import {slideInAnimation} from './route-animations';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  public isDark: boolean;
  public currentRoute: string;

  constructor(private router: Router) {
    this.getCurrentRoute();
    this.checkTheme();
  }

  @HostBinding('class')
  get themeMode(): string {
    this.isDark = JSON.parse(localStorage.getItem('theme')) === true;
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  checkTheme(): void {
    this.isDark = JSON.parse(localStorage.getItem('theme')) === true;
    localStorage.setItem('theme', JSON.stringify(this.isDark));
  }

  getCurrentRoute(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((rout: RouterEvent) => this.currentRoute = rout.url);
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
