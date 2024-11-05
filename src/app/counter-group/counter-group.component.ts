import { Component } from '@angular/core';
import { CounterComponent } from '../counter/counter.component'
import { CommonModule } from '@angular/common';
import { count } from 'rxjs';

@Component({
  selector: 'app-counter-group',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './counter-group.component.html',
  styleUrl: './counter-group.component.css'
})
export class CounterGroupComponent {
  counters = [0];

  // get counterList() {
  //   return this.counters;
  // }

  handleCountChange(newCount: number):void {
    console.log(newCount)
  }

  addCounter() {
    this.counters.push(0)
  }
}
