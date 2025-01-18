import { RouterLink, RouterOutlet } from '@angular/router';
import { routes } from './../app.routes';
import { Component } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [routes, RouterLink, RouterOutlet],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
