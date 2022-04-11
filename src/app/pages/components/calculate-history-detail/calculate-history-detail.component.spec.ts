import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateHistoryDetailComponent } from './calculate-history-detail.component';

describe('CalculateHistoryDetailComponent', () => {
  let component: CalculateHistoryDetailComponent;
  let fixture: ComponentFixture<CalculateHistoryDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculateHistoryDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculateHistoryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
