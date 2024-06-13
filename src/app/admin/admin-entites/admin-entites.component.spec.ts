import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEntitesComponent } from './admin-entites.component';

describe('AdminEntitesComponent', () => {
  let component: AdminEntitesComponent;
  let fixture: ComponentFixture<AdminEntitesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEntitesComponent]
    });
    fixture = TestBed.createComponent(AdminEntitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
