import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientcmdComponent } from './clientcmd.component';

describe('ClientcmdComponent', () => {
  let component: ClientcmdComponent;
  let fixture: ComponentFixture<ClientcmdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientcmdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientcmdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
