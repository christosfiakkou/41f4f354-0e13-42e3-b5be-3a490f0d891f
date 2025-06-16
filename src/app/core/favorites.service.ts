// src/app/core/favorites.service.ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private storageKey = 'myFavorites';

  getAll(): string[] {
    const json = localStorage.getItem(this.storageKey);
    return json ? JSON.parse(json) as string[] : [];
  }

  add(url: string): void {
    const favs = this.getAll();
    if (!favs.includes(url)) {
      favs.push(url);
      localStorage.setItem(this.storageKey, JSON.stringify(favs));
    }
  }

  remove(url: string): void {
    const favs = this.getAll().filter(u => u !== url);
    localStorage.setItem(this.storageKey, JSON.stringify(favs));
  }

  isFavorite(url: string): boolean {
    return this.getAll().includes(url);
  }
}
