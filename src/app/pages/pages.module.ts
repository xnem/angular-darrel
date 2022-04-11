import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { DriverMasterViewComponent } from './components/driver-master-view/driver-master-view.component';
import { DriverMasterEditComponent } from './components/driver-master-edit/driver-master-edit.component';
import { CalculateComponent } from './components/calculate/calculate.component';
import { CalculateHistoryComponent } from './components/calculate-history/calculate-history.component';
import { CalculateHistoryDetailComponent } from './components/calculate-history-detail/calculate-history-detail.component';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [
    MenuComponent,
    DriverMasterViewComponent,
    DriverMasterEditComponent,
    CalculateComponent,
    CalculateHistoryComponent,
    CalculateHistoryDetailComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MenuComponent,
    DriverMasterViewComponent,
    DriverMasterEditComponent,
    CalculateComponent,
    CalculateHistoryComponent,
    CalculateHistoryDetailComponent
  ]
})
export class PagesModule { }
