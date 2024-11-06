import { Component } from '@angular/core';
import { CounterComponent, ICounter } from '../counter/counter.component'
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service'

@Component({
  selector: 'app-counter-group',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './counter-group.component.html',
  styleUrl: './counter-group.component.css'
})
export class CounterGroupComponent {

  constructor(public cntService: CounterService) {}

  handleCountChange(newCount: ICounter): void {
    this.cntService.updateCounter(newCount.id, newCount.count)
  }

  addCounter() {
     // 你可以根据需要设置 count 或其他属性

    // 获取当前 counters 数组
    this.cntService.addCounter(0);
  }
}
