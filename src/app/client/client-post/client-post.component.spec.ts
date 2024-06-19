import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPostComponent } from './client-post.component';

describe('ClientPostComponent', () => {
  let component: ClientPostComponent;
  let fixture: ComponentFixture<ClientPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPostComponent]
    });
    fixture = TestBed.createComponent(ClientPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
