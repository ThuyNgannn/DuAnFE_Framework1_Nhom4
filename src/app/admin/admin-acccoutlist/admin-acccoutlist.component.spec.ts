import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAcccoutlistComponent } from './admin-acccoutlist.component';

describe('AdminAcccoutlistComponent', () => {
  let component: AdminAcccoutlistComponent;
  let fixture: ComponentFixture<AdminAcccoutlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAcccoutlistComponent]
    });
    fixture = TestBed.createComponent(AdminAcccoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
