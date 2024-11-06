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

  updateCounter(id: number, newCount: number) {
    // 获取当前的 counters 数组
    const counters = this.countersSubject.value;

    // 创建一个新的数组，更新特定 id 的元素
    const updatedCounters = counters.map(counter => 
      counter.id === id ? { ...counter, count: newCount } : counter
    );

    // 更新 countersSubject
    
    this.updateCounters(updatedCounters)
  }

  // 添加新计数器的方法
  addCounter(newCount: number) {
    // 获取当前的 counters 数组
    const currentCounters = this.countersSubject.value;
    const newCounter: ICounter = {id: currentCounters.length, count: newCount}
    // 创建一个新的数组，将新元素添加到当前数组中
    const updatedCounters = [...currentCounters, newCounter];
    // 更新 countersSubject，发布新的数组
    this.countersSubject.next(updatedCounters);

    this.updateCounters(updatedCounters)
  }
} 