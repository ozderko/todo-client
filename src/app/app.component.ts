import {Component, HostBinding} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {slideInAnimation} from './route-animations';

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

  constructor() {
    this.isDark = JSON.parse(localStorage.getItem('theme')) === true;
    localStorage.setItem('theme', JSON.stringify(this.isDark));
  }

  @HostBinding('class')
  get themeMode() {
    this.isDark = JSON.parse(localStorage.getItem('theme')) === true;
    return this.isDark ? 'dark-theme' : 'light-theme';
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
