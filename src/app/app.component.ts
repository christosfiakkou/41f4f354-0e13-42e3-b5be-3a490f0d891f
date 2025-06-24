import { Component } from '@angular/core';

/**
 * AppComponent
 * ------------
 * The root component of the Angular application.
 * Acts as the layout shell that hosts the router outlet and global components
 * like the header bar.
 *
 * Properties:
 *   - title: A placeholder title for the app (not used in the template)
 */
@Component({
  selector: 'app-root', // Custom tag rendered in index.html
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'gallery-template'; // Optional - useful for testing or metadata
}
