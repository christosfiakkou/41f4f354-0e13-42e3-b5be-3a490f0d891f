import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-photo-card',
  templateUrl: './photo-card.component.html',
  styleUrls: ['./photo-card.component.scss']
})
export class PhotoCardComponent {
  @Input() src!: string;
  @Input() isFavorite = false;
  @Output() favoriteToggle = new EventEmitter<void>();
}
