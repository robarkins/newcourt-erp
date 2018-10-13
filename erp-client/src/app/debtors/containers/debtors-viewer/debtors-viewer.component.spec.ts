import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtorsViewerComponent } from './debtors-viewer.component';

describe('DebtorsViewerComponent', () => {
  let component: DebtorsViewerComponent;
  let fixture: ComponentFixture<DebtorsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtorsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtorsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
