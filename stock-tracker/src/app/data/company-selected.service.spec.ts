import { TestBed } from '@angular/core/testing';

import { CompanySelectedService } from './company-selected.service';

describe('CompanySelectedService', () => {
  let service: CompanySelectedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompanySelectedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
