import { TestBed } from '@angular/core/testing';

import { HorseListService } from './horse-list.service';

describe('HorseListService', () => {
  let service: HorseListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HorseListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
