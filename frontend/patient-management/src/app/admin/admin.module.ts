import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';

// Import standalone components
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppointmentsComponent } from './appointments/appointments.component';
import { PatientComponent } from './patient/patient.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    // Import standalone components here
    DashboardComponent,
    AppointmentsComponent,
    PatientComponent,
  ],
})
export class AdminModule {}
