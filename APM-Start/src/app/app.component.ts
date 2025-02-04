import { Component } from "@angular/core";

@Component({
  selector: 'pm-root', //pm was created through ng new (NAME) --prefix pm
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>
    <ul class='nav nav-pills'>
        <li><a class='nav-link' routerLink='/welcome'>Home</a></li>
        <li><a class='nav-link' routerLink='/products'>Product List</a></li>
    </ul>
  </nav>
  <div class='container'>
    <router-outlet></router-outlet>
  </div>
  ` // Information within {{ }} is called a Template Expression
})
export class AppComponent {
  pageTitle: string = 'Acme Product Management';
}
