import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientAboutComponent } from './client-about.component';

describe('ClientAboutComponent', () => {
  let component: ClientAboutComponent;
  let fixture: ComponentFixture<ClientAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientAboutComponent]
    });
    fixture = TestBed.createComponent(ClientAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
