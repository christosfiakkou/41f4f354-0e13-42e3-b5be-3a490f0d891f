// src/app/favorites/favorites-list/favorites-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { FavoritesService } from 'src/app/core/favorites.service';

@Component({
  selector: 'app-favorites-list',
  templateUrl: './favorites-list.component.html',
  styleUrls: ['./favorites-list.component.scss']
})
export class FavoritesListComponent implements OnInit {
  favorites: string[] = [];

  constructor(
    private favSvc: FavoritesService,
    private router: Router
  ) {
    // reload whenever we navigate back here
    this.router.events.subscribe(evt => {
      if (evt instanceof NavigationEnd && evt.urlAfterRedirects === '/favorites') {
        this.favorites = this.favSvc.getAll();
      }
    });
  }

  ngOnInit(): void {
    this.favorites = this.favSvc.getAll();
  }

  openDetail(url: string): void {
    const id = btoa(url);
    this.router.navigate(['/favorites/photos', id]);
  }
}
