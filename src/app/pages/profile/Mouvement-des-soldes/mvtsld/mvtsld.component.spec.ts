import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvtsldComponent } from './mvtsld.component';

describe('MvtsldComponent', () => {
  let component: MvtsldComponent;
  let fixture: ComponentFixture<MvtsldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvtsldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvtsldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
