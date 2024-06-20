import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostEditComponent } from './admin-post-edit.component';

describe('AdminPostEditComponent', () => {
  let component: AdminPostEditComponent;
  let fixture: ComponentFixture<AdminPostEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPostEditComponent]
    });
    fixture = TestBed.createComponent(AdminPostEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
