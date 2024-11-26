import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Import the root component

bootstrapApplication(AppComponent)
  .catch(err => console.error(err));  // Catch and log any errors during bootstrapping
