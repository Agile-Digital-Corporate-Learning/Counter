import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config: Config = {
    counterSize: 0,
    max: 0,
    min: 0
  };

  constructor(private http: HttpClient) { }

  fetchConfig() {
    return this.http.get('https://localhost:7105/configs/1')
      .subscribe(data => this.config = data as Config);
  }
}
export interface Config {
  counterSize: number;
  max: number,
  min: number
}

