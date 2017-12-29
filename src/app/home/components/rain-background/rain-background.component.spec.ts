import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainBackgroundComponent } from './rain-background.component';

describe('RainBackgroundComponent', () => {
  let component: RainBackgroundComponent;
  let fixture: ComponentFixture<RainBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
