import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroComponent } from '../components/hero/hero';
import { Observable } from 'rxjs';
import { HeroInterface } from '../components/hero/hero.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private API_URL = "https://localhost:7127/api/SuperHeros"

  constructor(private httpClient: HttpClient) { }

  getHeros(): Observable<HeroInterface[]>{
    return this.httpClient.get<HeroInterface[]>(this.API_URL)
  }

  getHeroById(id: number): Observable<HeroInterface> {
    return this.httpClient.get<HeroInterface>(`${this.API_URL}/${id}`);
  }

  createHero(hero: HeroInterface): Observable<HeroInterface> {
    return this.httpClient.post<HeroInterface>(this.API_URL, hero);
  }

  updateHero(id: number, hero: HeroInterface): Observable<HeroInterface> {
    return this.httpClient.put<HeroInterface>(`${this.API_URL}/${id}`, hero);
  }

  deleteHero(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}/${id}`);
  }
}
