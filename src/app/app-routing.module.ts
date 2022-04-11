import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculateHistoryDetailComponent } from './pages/components/calculate-history-detail/calculate-history-detail.component';
import { CalculateHistoryComponent } from './pages/components/calculate-history/calculate-history.component';
import { CalculateComponent } from './pages/components/calculate/calculate.component';
import { DriverMasterEditComponent } from './pages/components/driver-master-edit/driver-master-edit.component';
import { DriverMasterViewComponent } from './pages/components/driver-master-view/driver-master-view.component';
import { MenuComponent } from './pages/components/menu/menu.component';
import { UrlConst } from './pages/constants/url-const';

const routes: Routes = [
  { path: '', redirectTo: UrlConst.SLASH + UrlConst.PATH_MENU, pathMatch: 'full' },
  { path: UrlConst.PATH_MENU, component: MenuComponent },
  { path: UrlConst.PATH_DRIVER_MASTER, component: DriverMasterViewComponent},
  { path: UrlConst.PATH_DRIVER_MASTER_EDIT, component: DriverMasterEditComponent},
  { path: UrlConst.PATH_CALCULATE, component: CalculateComponent},
  { path: UrlConst.PATH_CALCULATE_HISTORY, component: CalculateHistoryComponent },
  { path: UrlConst.PATH_CALCULATE_HISTORY_DETAIL, component: CalculateHistoryDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
