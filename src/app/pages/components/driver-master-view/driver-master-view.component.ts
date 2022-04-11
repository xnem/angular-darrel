import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';
import { Driver } from '../../models/driver';
import { DriverService } from '../../services/driver.service';

@Component({
  selector: 'app-driver-master-view',
  templateUrl: './driver-master-view.component.html',
  styleUrls: ['./driver-master-view.component.scss']
})
export class DriverMasterViewComponent implements OnInit {

  displayedColumns = ['id', 'name', 'surname', 'email', 'base_taxi_price', 'base_taxi_distance', 'buttons'];
  drivers: Driver[];

  constructor(
    private loadingService: LoadingService,
    private driverService: DriverService
  ) { }

  ngOnInit(): void {
    this.loadingService.startLoading();
    this.driverService.findAll().subscribe(drivers => {
      this.drivers = drivers;
      this.loadingService.stopLoading();
    });
  }

}
