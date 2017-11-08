import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoffeComponent } from './coffe.component';

describe('CoffeComponent', () => {
  let component: CoffeComponent;
  let fixture: ComponentFixture<CoffeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoffeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
