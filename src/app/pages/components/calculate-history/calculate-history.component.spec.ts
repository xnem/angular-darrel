import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateHistoryComponent } from './calculate-history.component';

describe('CalculateHistoryComponent', () => {
  let component: CalculateHistoryComponent;
  let fixture: ComponentFixture<CalculateHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
