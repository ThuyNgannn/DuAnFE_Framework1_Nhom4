import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPagenotfoundComponent } from './admin-pagenotfound.component';

describe('AdminPagenotfoundComponent', () => {
  let component: AdminPagenotfoundComponent;
  let fixture: ComponentFixture<AdminPagenotfoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPagenotfoundComponent]
    });
    fixture = TestBed.createComponent(AdminPagenotfoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
