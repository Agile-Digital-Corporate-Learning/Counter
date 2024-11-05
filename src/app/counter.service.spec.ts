import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

import { Config, CounterService } from './counter.service';

describe('CounterService', () => {
  let service: CounterService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CounterService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(CounterService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should fetch todos', () => {
    const mockConfig: Config = {
      counterSize: 10,
      max: 10,
      min: 1
    };

    service.fetchConfig();

    // 模拟 HTTP GET 请求
    const req = httpTestingController.expectOne('https://localhost:7105/configs/1');
    expect(req.request.method).toEqual('GET');
    // 模拟返回数据
    req.flush(mockConfig);

    // 验证服务中的数据是否被正确赋值
    expect(service.config).toEqual(mockConfig);
  });
});
