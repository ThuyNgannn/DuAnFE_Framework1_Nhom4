import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientServiceDetailComponent } from './client-service-detail.component';

describe('ClientServiceDetailComponent', () => {
  let component: ClientServiceDetailComponent;
  let fixture: ComponentFixture<ClientServiceDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientServiceDetailComponent]
    });
    fixture = TestBed.createComponent(ClientServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
