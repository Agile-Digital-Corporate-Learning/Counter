import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ICounter } from '../counter/counter.component';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private countersSubject = new BehaviorSubject<ICounter[]>([]);
  counters$ = this.countersSubject.asObservable();

  private sumSubject = new BehaviorSubject<number>(0);
  sum$ = this.sumSubject.asObservable();

  updateCounters(counters: ICounter[]) {
    this.countersSubject.next(counters);
    const sum = counters.reduce((a, b) => a + b.count, 0);
    this.sumSubject.next(sum);
  }
} 