import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/**
 * AppRoutingModule
 * ----------------
 * This module defines the root-level application routes.
 * It uses **lazy loading** to optimize performance and modularity.
 * 
 * Routes:
 *   - '' (root path): Loads the PhotosModule (default landing page)
 *   - 'favorites': Loads the FavoritesModule (for saved photos)
 *   - '**': Wildcard route that redirects unknown paths to the root
 */
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./photos/photos.module').then(m => m.PhotosModule)
  },
  {
    path: 'favorites',
    loadChildren: () =>
      import('./favorites/favorites.module').then(m => m.FavoritesModule)
  },
  {
    path: '**',  // Catch-all for unknown paths
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Sets up the root app routes
  exports: [RouterModule]                 // Makes RouterModule available app-wide
})
export class AppRoutingModule {}
