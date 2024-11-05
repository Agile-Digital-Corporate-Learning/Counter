import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterGroupComponent } from './counter-group/counter-group.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterGroupComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Counter';
}
