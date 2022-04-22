import { TestBed } from '@angular/core/testing';

import { AddChequeService } from './cheque.service';

describe('AddChequeService', () => {
  let service: AddChequeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddChequeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
