import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { NavbarSm } from './navbar-sm/navbar-sm';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer, NavbarSm],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
