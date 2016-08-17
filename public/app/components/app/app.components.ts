import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `

    <a [routerLink]="['/']">Game 1</a>
	  <a [routerLink]="['/alt']">Game 2</a>
    <div class="outer-outlet">
      <router-outlet></router-outlet>
    </div>
  `,
  // add our router directives we will be using
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent { }
