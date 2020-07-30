import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  @Input() isDark: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  changeTheme() {
    this.isDark = !this.isDark;
    localStorage.setItem('theme', JSON.stringify(this.isDark));
  }

}
