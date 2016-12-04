import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <ba-page-top></ba-page-top>
    <ba-sidebar></ba-sidebar>
    <div style="position:absolute;top:60px;left:180px;bottom:0px;right:0px">
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent  { name = 'Angular'; }
