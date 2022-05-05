import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesUserComponent } from './articles-user.component';

describe('ArticlesUserComponent', () => {
  let component: ArticlesUserComponent;
  let fixture: ComponentFixture<ArticlesUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
