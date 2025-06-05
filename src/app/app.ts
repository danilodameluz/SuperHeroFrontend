import { Component } from '@angular/core';
import { Header } from "./components/header/header";
import { HeroComponent } from "./components/hero/hero";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    Header, 
    HeroComponent,
    FormsModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'SuperHeroFront';
}
