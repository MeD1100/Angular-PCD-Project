import { TestBed } from '@angular/core/testing';

import { BanksapiService } from './banksapi.service';

describe('BanksapiService', () => {
  let service: BanksapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BanksapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
