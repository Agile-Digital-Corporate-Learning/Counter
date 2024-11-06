import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService } from '../services/counter.service'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css',
  standalone: true,
  imports: [CommonModule],
})

export class SummaryComponent {
  constructor(public cntService: CounterService) {}
}
