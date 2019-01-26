# AngularMedStore

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.3.

`yarn install -g @angular/cli` ou `npm install -g @angular/cli`

## Development server

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. ou `ng serve`

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

##Solutions and Error

#Could not find module “@angular-devkit/build-angular”
- Install @angular-devkit/build-angular as dev dependency. (This package is newly introduced in Angular 6.0)
  `npm install --save-dev @angular-devkit/build-angular`
  
#npm ERR Missing!
- Install @angular/animations with `npm install @angular/animations`
- Install @angular/cdk with `npm install @angular/cdk`
- Install @angular/material with `npm install @angular/material`
- Install @angular-devkit/build-angular `npm install --save-dev @angular-devkit/build-angular`
