import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailClienComponent } from './detail-clien.component';

describe('DetailClienComponent', () => {
  let component: DetailClienComponent;
  let fixture: ComponentFixture<DetailClienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailClienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailClienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
