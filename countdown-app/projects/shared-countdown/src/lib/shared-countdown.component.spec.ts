import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedCountdownComponent } from './shared-countdown.component';

describe('SharedCountdownComponent', () => {
  let component: SharedCountdownComponent;
  let fixture: ComponentFixture<SharedCountdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedCountdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedCountdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
