import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroTwoComponent } from './zero-two.component';

describe('ZeroTwoComponent', () => {
  let component: ZeroTwoComponent;
  let fixture: ComponentFixture<ZeroTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZeroTwoComponent]
    });
    fixture = TestBed.createComponent(ZeroTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
