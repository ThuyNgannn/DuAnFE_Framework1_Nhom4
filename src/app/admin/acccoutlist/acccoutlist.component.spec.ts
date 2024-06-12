import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcccoutlistComponent } from './acccoutlist.component';

describe('AcccoutlistComponent', () => {
  let component: AcccoutlistComponent;
  let fixture: ComponentFixture<AcccoutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcccoutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcccoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
