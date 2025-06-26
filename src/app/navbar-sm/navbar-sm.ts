import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-sm',
  imports: [RouterLink],
  templateUrl: './navbar-sm.html',
  styleUrl: './navbar-sm.css'
})
export class NavbarSm {
  isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
