import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/home/app.component';
import { appConfig } from './app/home/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
