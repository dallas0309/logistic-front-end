import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContacteditComponent } from './contactedit.component';

describe('ContacteditComponent', () => {
  let component: ContacteditComponent;
  let fixture: ComponentFixture<ContacteditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContacteditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContacteditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
