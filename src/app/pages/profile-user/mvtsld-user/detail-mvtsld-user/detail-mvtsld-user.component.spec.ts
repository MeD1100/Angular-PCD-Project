import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtsldUserComponent } from './detail-mvtsld-user.component';

describe('DetailMvtsldUserComponent', () => {
  let component: DetailMvtsldUserComponent;
  let fixture: ComponentFixture<DetailMvtsldUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtsldUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtsldUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
