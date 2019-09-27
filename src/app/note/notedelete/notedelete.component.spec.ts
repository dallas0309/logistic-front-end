import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotedeleteComponent } from './notedelete.component';

describe('NotedeleteComponent', () => {
  let component: NotedeleteComponent;
  let fixture: ComponentFixture<NotedeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotedeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotedeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
