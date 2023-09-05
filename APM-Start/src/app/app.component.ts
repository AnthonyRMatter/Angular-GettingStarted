import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //pm was created through ng new (NAME) --prefix pm
  template: `
  <div><h1>{{pageTitle}}</h1>
      <div>My First Component</div>
  </div>
  `
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
