import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcourtGridComponent } from './newcourt-grid.component';

describe('NewcourtGridComponent', () => {
  let component: NewcourtGridComponent;
  let fixture: ComponentFixture<NewcourtGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewcourtGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcourtGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
