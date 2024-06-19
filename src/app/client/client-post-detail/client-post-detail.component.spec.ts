import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPostDetailComponent } from './client-post-detail.component';

describe('ClientPostDetailComponent', () => {
  let component: ClientPostDetailComponent;
  let fixture: ComponentFixture<ClientPostDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPostDetailComponent]
    });
    fixture = TestBed.createComponent(ClientPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
