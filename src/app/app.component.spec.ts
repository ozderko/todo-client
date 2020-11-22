import {async, TestBed} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {By} from '@angular/platform-browser';
import {RouterOutlet} from '@angular/router';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should return theme false', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const isDark = fixture.componentInstance.isDark;
    localStorage.setItem('theme', String(false));
    fixture.detectChanges();
    expect(isDark).toBeFalse();
  });

  it('should return light theme', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const getTheme = fixture.componentInstance.themeMode;
    expect(getTheme).toBe('light-theme');
  });

  it('should have router-outlet directive', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const de = fixture.debugElement.query(By.directive(RouterOutlet));
    expect(de).not.toBeNull();
  });
});
