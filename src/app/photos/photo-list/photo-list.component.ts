import { Component, OnInit, HostListener } from '@angular/core';
import { PhotoService } from '../../core/photo.service';
import { FavoritesService } from '../../core/favorites.service';

/**
 * PhotoListComponent
 * ------------------
 * This component displays a stream of photo cards.
 * It supports infinite scrolling and favorite toggling.
 *
 * - Loads photos in batches using PhotoService.
 * - Tracks user favorites via FavoritesService.
 * - Triggers more loading on scroll near the page bottom.
 */
@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  /** Holds the list of photo URLs currently displayed */
  photos: string[] = [];

  /** Whether the component is currently loading more photos */
  loading = false;

  constructor(
    private photoSvc: PhotoService,           // Service to fetch photo URLs
    public favSvc: FavoritesService           // Service to manage favorites (made public for template use)
  ) {}

  /**
   * Lifecycle hook that triggers on component initialization.
   * Loads the first batch of photos.
   */
  ngOnInit(): void {
    this.loadMore();
  }

  /**
   * Host listener that triggers on window scroll.
   * If the user is near the bottom of the page, it loads more photos.
   */
  @HostListener('window:scroll')
  onScroll(): void {
    const buffer = 300; // px before bottom to trigger loading
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - buffer) {
      this.loadMore();
    }
  }

  /**
   * Loads the next batch of photos using the PhotoService.
   * Prevents duplicate requests using a `loading` guard.
   */
  loadMore(): void {
    if (this.loading) return;
    this.loading = true;

    this.photoSvc.fetchPhotos(10).subscribe(urls => {
      this.photos.push(...urls);   // Append to current photo list
      this.loading = false;
    });
  }

  /**
   * Toggles a photo's favorite state using the FavoritesService.
   * Called when the user interacts with a photo card's favorite button.
   *
   * @param url - The photo URL whose favorite status should be toggled
   */
  toggleFavorite(url: string): void {
    if (this.favSvc.isFavorite(url)) {
      this.favSvc.remove(url);
    } else {
      this.favSvc.add(url);
    }
  }
}
