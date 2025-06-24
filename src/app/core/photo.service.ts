import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

/**
 * PhotoService
 * ------------
 * Provides random photo URLs using the Picsum Photos API.
 * Simulates network latency using RxJS delay.
 */
@Injectable({ providedIn: 'root' }) // Automatically registered as a singleton service
export class PhotoService {

  /**
   * Returns an observable stream of random photo URLs.
   * Simulates an API call delay using RxJS `delay()`.
   *
   * @param count - Number of photos to fetch
   * @returns Observable<string[]> - A stream emitting an array of photo URLs
   */
  fetchPhotos(count: number): Observable<string[]> {
    const urls = Array.from({ length: count }, () =>
      `https://picsum.photos/200/300?random=${Math.random()}`
    );

    const ms = 200 + Math.random() * 100; // Simulated delay between 200–300ms
    return of(urls).pipe(delay(ms));
  }
}
