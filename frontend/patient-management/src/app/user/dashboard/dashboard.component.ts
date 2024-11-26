import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  // Import CommonModule

@Component({
  selector: 'app-dashboard',
  standalone: true,  // Make it standalone
  imports: [CommonModule],  // Import CommonModule here
  templateUrl: './dashboard.component.html',  // Template URL
  styleUrls: ['./dashboard.component.scss'] // Styles
})
export class DashboardComponent {
  appointments = []; // Sample appointments data for demonstration
}
