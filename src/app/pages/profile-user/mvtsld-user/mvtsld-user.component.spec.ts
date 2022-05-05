import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtsldUserComponent } from './mvtsld-user.component';

describe('MvtsldUserComponent', () => {
  let component: MvtsldUserComponent;
  let fixture: ComponentFixture<MvtsldUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtsldUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtsldUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
