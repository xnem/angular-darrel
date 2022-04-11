import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverMasterEditComponent } from './driver-master-edit.component';

describe('DriverMasterEditComponent', () => {
  let component: DriverMasterEditComponent;
  let fixture: ComponentFixture<DriverMasterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverMasterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverMasterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
