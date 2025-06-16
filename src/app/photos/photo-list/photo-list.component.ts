import { Component, OnInit, HostListener } from '@angular/core';
import { PhotoService } from '../../core/photo.service';
import { FavoritesService } from '../../core/favorites.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photos: string[] = [];
  loading = false;

  constructor(
    private photoSvc: PhotoService,
    public favSvc: FavoritesService   // make public so template can read isFavorite()
  ) {}

  ngOnInit(): void {
    this.loadMore();
  }

  @HostListener('window:scroll')
  onScroll(): void {
    const buffer = 300;
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - buffer) {
      this.loadMore();
    }
  }

  loadMore(): void {
    if (this.loading) return;
    this.loading = true;
    this.photoSvc.fetchPhotos(10).subscribe(urls => {
      this.photos.push(...urls);
      this.loading = false;
    });
  }

  toggleFavorite(url: string): void {
    if (this.favSvc.isFavorite(url)) {
      this.favSvc.remove(url);
    } else {
      this.favSvc.add(url);
    }
  }
}
