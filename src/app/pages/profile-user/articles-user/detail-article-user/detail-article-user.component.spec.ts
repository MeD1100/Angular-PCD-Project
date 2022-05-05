import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailArticleUserComponent } from './detail-article-user.component';

describe('DetailArticleUserComponent', () => {
  let component: DetailArticleUserComponent;
  let fixture: ComponentFixture<DetailArticleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailArticleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailArticleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
