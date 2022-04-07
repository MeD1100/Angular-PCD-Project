import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtsldHistoComponent } from './detail-mvtsld-histo.component';

describe('DetailMvtsldHistoComponent', () => {
  let component: DetailMvtsldHistoComponent;
  let fixture: ComponentFixture<DetailMvtsldHistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtsldHistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtsldHistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
