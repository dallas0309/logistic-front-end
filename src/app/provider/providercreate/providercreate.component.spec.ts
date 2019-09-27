import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidercreateComponent } from './providercreate.component';

describe('ProvidercreateComponent', () => {
  let component: ProvidercreateComponent;
  let fixture: ComponentFixture<ProvidercreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidercreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidercreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
