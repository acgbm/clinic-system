import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Import RouterModule for routing

@Component({
  selector: 'app-root',
  standalone: true,  // Mark this component as standalone
  imports: [RouterModule],  // Include RouterModule for routing functionality
  template: `<router-outlet></router-outlet>`,  // Make sure the router-outlet is here
  styleUrls: ['./app.component.scss'] // Include styles
})
export class AppComponent {}