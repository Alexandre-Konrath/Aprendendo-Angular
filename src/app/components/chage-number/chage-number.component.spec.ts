import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChageNumberComponent } from './chage-number.component';

describe('ChageNumberComponent', () => {
  let component: ChageNumberComponent;
  let fixture: ComponentFixture<ChageNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChageNumberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChageNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
