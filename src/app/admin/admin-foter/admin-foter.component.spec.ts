import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFoterComponent } from './admin-foter.component';

describe('AdminFoterComponent', () => {
  let component: AdminFoterComponent;
  let fixture: ComponentFixture<AdminFoterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFoterComponent]
    });
    fixture = TestBed.createComponent(AdminFoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
