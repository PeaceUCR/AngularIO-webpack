# Webpack AugularIO Step by Step

the sample code from Code from https://www.udemy.com/the-complete-guide-to-angular-2/learn/lecture/4688410#overview

then we will try code from official documents

**1. /src/app/main.ts**

    import '../polyfills';

few lines of code which make your application compatible for different browsers.
https://stackoverflow.com/questions/48368818/what-is-the-use-of-polyfills-ts-file-in-angular

    platformBrowserDynamic().bootstrapModule(AppModule);

platformBrowserDynamic() creates a platform, the entry point for Angular on a web page; references the component you want to bootstrap the application with.

**2. /src/app/app.module.ts**

@NgModule: NgModule describes how the application parts fit together

https://angular.io/api/core/NgModule#declarations
https://angular.io/guide/ngmodule-vs-jsmodule    

**declarations vs imports vs providers**

declarations:  put your components, directives, and pipes here.

imports: The set of NgModules whose exported declarables are available to templates in this module.

providers: put services for DI

https://stackoverflow.com/questions/39062930/what-is-the-difference-between-declarations-providers-and-import-in-ngmodule

BrowserModule:required infrastructure for all Angular apps

**3.app-routing.module.ts**

https://angular.io/guide/router#!#routing-module

Why syntax import&export??? https://stackoverflow.com/questions/41281780/angular2-how-do-imports-and-exports-work-in-angular2-modules

RouterModule: Adds router directives and providers.

forRoot() vs forChild()???.

https://stackoverflow.com/questions/40498081/routermodule-forrootroutes-vs-routermodule-forchildroutes

in code if change forRoot() to forChild() then cause error.

https://stackoverflow.com/questions/51237023/sub-module-child-routes-not-working-error-cannot-match-any-routes

loadChildren(https://angular.io/guide/lazy-loading-ngmodules): lazy-loading???

https://stackoverflow.com/questions/53332996/angular-6-7-by-default-uses-eager-lazy-loading

For lazy loading and eager loading itself will cause **reimport bug**

https://v2.angular.io/docs/ts/latest/guide/ngmodule.html#!#core-for-root

**For route in HTML ,please remember to add <router-outlet></router-outlet>**


#Ends here, Let's Go with official document https://angular.io/guide/router#router-outlet







