import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  @Input() count: number = 1;
  @Output() onNumChange = new EventEmitter<number>();
  
  increase(): void {
    this.count++;
    this.onNumChange.emit(this.count);
  }

  decrease(): void {
    this.count--;
    this.onNumChange.emit(this.count);
  }

  reset(): void {
    this.count = 0;
    this.onNumChange.emit(this.count);
  }
}
