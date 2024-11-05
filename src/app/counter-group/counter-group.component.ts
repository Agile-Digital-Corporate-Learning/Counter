import { Component } from '@angular/core';
import { CounterComponent, ICounter } from '../counter/counter.component'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-counter-group',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './counter-group.component.html',
  styleUrl: './counter-group.component.css'
})
export class CounterGroupComponent {
  counters = [{
    id: 0,
    number: 0
  }];
  get sum() {
    return this.counters.reduce((a, b) => a + b.number, 0)
  }
  handleCountChange(newCount: ICounter): void {
    let existCounter = this.counters.find(x=> x.id === newCount.id);
    existCounter!.number = newCount.count
  }

  addCounter() {
    this.counters.push({
      id: this.counters.length,
      number: 0
    })
  }
}
