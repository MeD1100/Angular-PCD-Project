import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtsldHistoUserComponent } from './detail-mvtsld-histo-user.component';

describe('DetailMvtsldHistoUserComponent', () => {
  let component: DetailMvtsldHistoUserComponent;
  let fixture: ComponentFixture<DetailMvtsldHistoUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtsldHistoUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtsldHistoUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
