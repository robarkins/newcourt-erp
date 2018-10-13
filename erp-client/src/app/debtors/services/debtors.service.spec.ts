import { TestBed, inject } from '@angular/core/testing';

import { DebtorsService } from './debtors.service';

describe('DebtorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DebtorsService]
    });
  });

  it('should be created', inject([DebtorsService], (service: DebtorsService) => {
    expect(service).toBeTruthy();
  }));
});
