import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { CounterGroupComponent } from './counter-group/counter-group.component';
import { SummaryComponent } from './summary/summary.component'

export const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'counter-group', 
    pathMatch: 'full' 
  },
  {
    path: 'summary',
    component: SummaryComponent
  },
  {
    path: 'counter-group',
    component: CounterGroupComponent
  },
  {
    path: '**',  // 通配符路由，处理所有未匹配的路径
    redirectTo: 'counter-group'
  }
];
