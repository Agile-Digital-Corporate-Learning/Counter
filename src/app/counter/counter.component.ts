import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})

export class CounterComponent {
  @Input() count:number = 0;
  @Input() id:number = 0;
  @Output() onNumChange = new EventEmitter<ICounter>();
  
  increase(): void {
    this.count++;
    this.onNumChange.emit({
      id: this.id,
      count: this.count
    });
  }

  decrease(): void {
    this.count--;
    this.onNumChange.emit({
      id: this.id,
      count: this.count
    });
  }

  reset(): void {
    this.count = 0;
    this.onNumChange.emit({
      id: this.id,
      count: this.count
    });
  }
}

export interface ICounter {
  count: number,
  id: number
}
