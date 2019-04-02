import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', loadChildren: './users/users.module#UsersModule' }
];

//syntax import/export????
//exports: [RouterModule.forRoot(appRoutes)] not work?
//is RouterModule after configured??
//RouterModule singleton???
//https://stackoverflow.com/questions/41281780/angular2-how-do-imports-and-exports-work-in-angular2-modules
//do as https://angular.io/guide/router#refactor-the-routing-configuration-into-a-routing-module
@NgModule({
    imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })], // <-- debugging purposes only,
    exports: [RouterModule]
})
export class AppRoutingModule {
}