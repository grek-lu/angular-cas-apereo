import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthCasApereoComponent } from './auth-cas-apereo.component';

describe('AuthCasApereoComponent', () => {
  let component: AuthCasApereoComponent;
  let fixture: ComponentFixture<AuthCasApereoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthCasApereoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthCasApereoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
