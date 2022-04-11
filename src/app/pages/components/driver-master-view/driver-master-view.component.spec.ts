import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMasterViewComponent } from './driver-master-view.component';

describe('DriverMasterViewComponent', () => {
  let component: DriverMasterViewComponent;
  let fixture: ComponentFixture<DriverMasterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverMasterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMasterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
