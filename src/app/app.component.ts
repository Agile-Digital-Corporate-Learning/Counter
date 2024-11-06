import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav>
      <a routerLink="/counter-group">Counter Group</a>
      |
      <a routerLink="/summary">Summary</a> |
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  title = 'counter-app';
}
