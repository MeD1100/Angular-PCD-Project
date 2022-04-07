import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMvtsldComponent } from './detail-mvtsld.component';

describe('DetailMvtsldComponent', () => {
  let component: DetailMvtsldComponent;
  let fixture: ComponentFixture<DetailMvtsldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMvtsldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMvtsldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
