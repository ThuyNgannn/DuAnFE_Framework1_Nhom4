import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostAddComponent } from './admin-post-add.component';

describe('AdminPostAddComponent', () => {
  let component: AdminPostAddComponent;
  let fixture: ComponentFixture<AdminPostAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPostAddComponent]
    });
    fixture = TestBed.createComponent(AdminPostAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
