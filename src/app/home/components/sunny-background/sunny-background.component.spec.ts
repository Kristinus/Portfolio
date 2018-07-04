import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunnyBackgroundComponent } from './sunny-background.component';

describe('SunnyBackgroundComponent', () => {
  let component: SunnyBackgroundComponent;
  let fixture: ComponentFixture<SunnyBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunnyBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunnyBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
