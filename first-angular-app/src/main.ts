import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

//App.Component
platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));

// Standalone
//bootstrapApplication(AppComponent).catch((err) => console.error(err));