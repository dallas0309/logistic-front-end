import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotecreateComponent } from './notecreate.component';

describe('NotecreateComponent', () => {
  let component: NotecreateComponent;
  let fixture: ComponentFixture<NotecreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotecreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotecreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
