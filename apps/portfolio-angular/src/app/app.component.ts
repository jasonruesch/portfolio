import { Component } from '@angular/core';

@Component({
  selector: 'jr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  shouldCenterPage = true;
  isHome = true;

  setSidebarOpen(open: boolean) {}
}
