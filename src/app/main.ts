import '../polyfills';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
//https://blog.angularindepth.com/how-to-manually-bootstrap-an-angular-application-9a36ccf86429

//platformBrowserDynamic() creates a platform, the entry point for Angular on a web page
//https://angular.io/api/core/PlatformRef#description

//When the application is being created Angular checks the bootstrap property of the module used to bootstrap the application
//This property usually references the component you want to bootstrap the application with. Then Angular finds the element that is the selector of bootstrapped component in the DOM and initializes the component.
platformBrowserDynamic().bootstrapModule(AppModule);