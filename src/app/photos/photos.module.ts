/**
 * PhotosModule
 * ------------
 * Feature module that renders the photo stream using PhotoListComponent.
 * Configured with its own routing.
 *
 * Declares:
 *   - PhotoListComponent: The component displaying the photo grid
 *
 * Imports:
 *   - SharedModule: For <app-photo-card> and Material components
 *   - RouterModule.forChild(): Defines local routes for this module
 *   - Angular Material modules used in this feature (spinner, button)
 */
@NgModule({
  declarations: [
    PhotoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: PhotoListComponent }
    ]),
    SharedModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ]
})
export class PhotosModule {}
