import { TestBed } from '@angular/core/testing';

import { PreferenceCheckGuard } from './preference-check.guard';

describe('PreferenceCheckGuard', () => {
  let guard: PreferenceCheckGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PreferenceCheckGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
