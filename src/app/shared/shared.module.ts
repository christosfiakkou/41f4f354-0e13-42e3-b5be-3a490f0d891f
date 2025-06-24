/**
 * SharedModule
 * ------------
 * This module contains reusable components and Angular Material imports
 * shared across the application.
 *
 * Components:
 *   - HeaderComponent: App header using mat-toolbar
 *   - PhotoCardComponent: Reusable photo display card with favorite toggle
 *
 * Why SharedModule?
 * - Centralizes shared UI and layout components
 * - Avoids duplicate declarations/imports across feature modules
 */
@NgModule({
  declarations: [
    HeaderComponent,
    PhotoCardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,       // Required for <mat-icon>
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [
    HeaderComponent,     // Reusable in AppComponent
    PhotoCardComponent,  // Used in PhotoListComponent
    MatIconModule        // Export if <mat-icon> is used in other modules
  ]
})
export class SharedModule {}
