import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AvatarModule } from 'primeng/avatar';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { MenuModule } from 'primeng/menu';

import { AppLayoutModule } from 'src/app/layout/app-layout.module';
import { AppTopbarModule } from 'src/app/layout/app-topbar.module';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeManagementRoutingModule } from './employee-management-routing.module';
import { EmployeeManagementComponent } from './employee-management.component';
import { EmployeeManagementService } from './services/employee-management.service';
import { EmployeeStore } from './store/employee-management.store.service';
import { ShareModule } from '../share/share.module';
import { EmployeeItemComponent } from './components/employee-item/employee-item.component';
import { EmployeeCarouselModule } from './components/employee-carousel/employee-carousel.module';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
@NgModule({
  declarations: [
    EmployeeManagementComponent,
    EmployeeListComponent,
    EmployeeItemComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    CommonModule,
    EmployeeManagementRoutingModule,
    AppLayoutModule,
    RouterModule,
    AppTopbarModule,
    ShareModule,
    EmployeeCarouselModule, 
    AvatarModule, 
    TableModule,
    ButtonModule,
    ToastModule,
    MenuModule
  ],
  providers: [EmployeeManagementService, EmployeeStore]
})
export class EmployeeManagementModule { }
