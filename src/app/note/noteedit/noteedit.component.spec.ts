import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteeditComponent } from './noteedit.component';

describe('NoteeditComponent', () => {
  let component: NoteeditComponent;
  let fixture: ComponentFixture<NoteeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
