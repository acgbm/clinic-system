import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  appointments = [
    { id: 1, date: '2024-12-01', time: '10:00 AM', patientName: 'John Doe' },
    { id: 2, date: '2024-12-03', time: '2:00 PM', patientName: 'Jane Smith' },
  ];

  constructor() {}

  ngOnInit(): void {
    // In the future, fetch all appointments from the API
  }
}
