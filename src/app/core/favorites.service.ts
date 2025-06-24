import { Injectable } from '@angular/core';

/**
 * FavoritesService
 * ----------------
 * Manages a list of favorite photo URLs using localStorage.
 * Provides methods to add, remove, list, and check favorites.
 */
@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private storageKey = 'myFavorites';

  /**
   * Retrieves the full list of favorite URLs from localStorage.
   */
  getAll(): string[] {
    const json = localStorage.getItem(this.storageKey);
    return json ? JSON.parse(json) as string[] : [];
  }

  /**
   * Adds a photo URL to the favorites list if it's not already present.
   *
   * @param url - The photo URL to add
   */
  add(url: string): void {
    const favs = this.getAll();
    if (!favs.includes(url)) {
      favs.push(url);
      localStorage.setItem(this.storageKey, JSON.stringify(favs));
    }
  }

  /**
   * Removes a photo URL from the favorites list.
   *
   * @param url - The photo URL to remove
   */
  remove(url: string): void {
    const favs = this.getAll().filter(u => u !== url);
    localStorage.setItem(this.storageKey, JSON.stringify(favs));
  }

  /**
   * Checks if a photo URL is marked as a favorite.
   *
   * @param url - The photo URL to check
   * @returns boolean - True if favorite, else false
   */
  isFavorite(url: string): boolean {
    return this.getAll().includes(url);
  }
}
