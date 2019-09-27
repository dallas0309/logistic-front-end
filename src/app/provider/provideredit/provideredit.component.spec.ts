import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidereditComponent } from './provideredit.component';

describe('ProvidereditComponent', () => {
  let component: ProvidereditComponent;
  let fixture: ComponentFixture<ProvidereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProvidereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProvidereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
