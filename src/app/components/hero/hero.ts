import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../services/hero';
import { HeroInterface } from './hero.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css'
})
export class HeroComponent implements OnInit{
  
  heros: HeroInterface[] = [];

  heroForm: HeroInterface = {
    id: 0,
    nome: '',
    nomeHeroi: '',
    dataNascimento: '',
    altura: 0,
    peso: 0,
    superpoderes: ''
  };

  constructor (private heroService: HeroService){ }
  
  ngOnInit() {
    this.getAllHeros();
  }

  getAllHeros() {
  this.heroService.getHeros().subscribe((heros: HeroInterface[]) => {
    this.heros = heros;
  });
  }

  createHero() {
    this.heroService.createHero(this.heroForm).subscribe((hero) => {
      this.heros.push(hero);
      this.resetForm();
    });
  }

  editHero(hero: HeroInterface) {
    this.heroForm = { ...hero };
  }

  updateHero() {
    this.heroService.updateHero(this.heroForm.id, this.heroForm).subscribe((hero) => {
      const index = this.heros.findIndex(h => h.id === hero.id);
      if (index !== -1) {
        this.heros[index] = hero;
      }
      this.resetForm();
    });
  }

  deleteHero(id: number) {
    this.heroService.deleteHero(id).subscribe(() => {
      this.heros = this.heros.filter(h => h.id !== id);
    });
  }

  resetForm() {
    this.heroForm = {
      id: 0,
      nome: '',
      nomeHeroi: '',
      dataNascimento: '',
      altura: 0,
      peso: 0,
      superpoderes: ''
    };
  }
}
