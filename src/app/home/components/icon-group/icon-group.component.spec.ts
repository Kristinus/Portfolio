import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconGroupComponent } from './icon-group.component';

describe('IconGroupComponent', () => {
  let component: IconGroupComponent;
  let fixture: ComponentFixture<IconGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
