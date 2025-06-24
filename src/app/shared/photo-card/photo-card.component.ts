import { Component, Input, Output, EventEmitter } from '@angular/core';

/**
 * PhotoCardComponent
 * ------------------
 * A reusable UI component that displays a photo inside a Material Design card.
 * It shows a heart icon that allows users to mark or unmark the photo as a favorite.
 *
 * Inputs:
 *   - src (string): The image source URL to display.
 *   - isFavorite (boolean): Indicates whether the photo is currently marked as a favorite.
 *
 * Outputs:
 *   - favoriteToggle (EventEmitter<void>): Emits an event when the user clicks the favorite button.
 */
@Component({
  selector: 'app-photo-card', // The custom HTML tag for this component
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent {
  /**
   * The URL of the image to be displayed in the card.
   */
  @Input() src!: string;

  /**
   * A boolean flag indicating if the photo is a favorite.
   * Controls the color and icon of the favorite button.
   */
  @Input() isFavorite = false;

  /**
   * Emits an event when the favorite icon is clicked.
   * The parent component listens to this output to handle the toggle action.
   */
  @Output() favoriteToggle = new EventEmitter<void>();
}
