import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditingComponent } from './details-editing.component';

describe('DetailsEditingComponent', () => {
  let component: DetailsEditingComponent;
  let fixture: ComponentFixture<DetailsEditingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEditingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
