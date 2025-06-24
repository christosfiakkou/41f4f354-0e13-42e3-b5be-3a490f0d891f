import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FavoritesService } from 'src/app/core/favorites.service';

/**
 * PhotoDetailComponent
 * --------------------
 * Displays a single photo in full view based on the URL passed in the route.
 * Allows the user to remove it from their favorites and return to the favorites list.
 *
 * URL Encoding:
 * - Photo URL is passed via route param, base64-encoded (using `btoa()`/`atob()`).
 *
 * Key Features:
 * - Reads photo ID from the route
 * - Decodes it and loads the full photo
 * - Provides 'Back' and 'Remove' actions
 */
@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {
  /** The decoded photo URL */
  url!: string;

  constructor(
    private favSvc: FavoritesService,    // Service to manage favorites
    private route: ActivatedRoute,       // Used to extract route parameters
    private router: Router               // Used to navigate back or redirect
  ) {}

  /**
   * OnInit lifecycle hook
   * - Extracts and decodes the photo ID from the route
   * - Converts the base64 string back into a full photo URL
   */
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.url = atob(id);
  }

  /**
   * Navigates the user back to the favorites view.
   */
  goBack(): void {
    this.router.navigate(['/favorites']);
  }

  /**
   * Removes the photo from favorites and redirects the user back.
   * Uses `replaceUrl` to prevent users from navigating back to the removed photo.
   */
  remove(): void {
    this.favSvc.remove(this.url);
    this.router.navigate(['/favorites'], { replaceUrl: true });
  }
}
