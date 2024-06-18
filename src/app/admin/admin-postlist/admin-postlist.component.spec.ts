import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPostlistComponent } from './admin-postlist.component';

describe('AdminPostlistComponent', () => {
  let component: AdminPostlistComponent;
  let fixture: ComponentFixture<AdminPostlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminPostlistComponent]
    });
    fixture = TestBed.createComponent(AdminPostlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
