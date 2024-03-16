import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UyduComponent } from './uydu.component';

describe('UyduComponent', () => {
  let component: UyduComponent;
  let fixture: ComponentFixture<UyduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UyduComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UyduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
