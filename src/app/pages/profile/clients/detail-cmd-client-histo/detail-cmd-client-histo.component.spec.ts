import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCmdClientHistoComponent } from './detail-cmd-client-histo.component';

describe('DetailCmdClientHistoComponent', () => {
  let component: DetailCmdClientHistoComponent;
  let fixture: ComponentFixture<DetailCmdClientHistoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCmdClientHistoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCmdClientHistoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
