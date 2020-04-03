import { TestBed, inject } from '@angular/core/testing';

import { AuthCasApereoService } from './auth-cas-apereo.service';

describe('AuthCasApereoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthCasApereoService]
    });
  });

  it('should be created', inject([AuthCasApereoService], (service: AuthCasApereoService) => {
    expect(service).toBeTruthy();
  }));
});
