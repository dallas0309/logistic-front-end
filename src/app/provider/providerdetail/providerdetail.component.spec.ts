import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderdetailComponent } from './providerdetail.component';

describe('ProviderdetailComponent', () => {
  let component: ProviderdetailComponent;
  let fixture: ComponentFixture<ProviderdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
