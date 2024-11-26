import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    DashboardComponent,
    ProfileComponent
  ],
  exports: [
    DashboardComponent, // Export so that the component can be used outside of this module
  ]
})
export class UserModule {}