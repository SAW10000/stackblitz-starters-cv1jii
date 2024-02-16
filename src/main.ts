import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { HomePageComponent } from './component/home-page/home-page.component';

@Component({
  selector: 'app-root',
  imports: [HomePageComponent],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <a target="_blank" href="https://angular.dev/overview">
      Learn more about Angular
    </a>
    <app-home-page></app-home-page>
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App);
