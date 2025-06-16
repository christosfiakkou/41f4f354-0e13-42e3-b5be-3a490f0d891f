import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PhotoService {
  fetchPhotos(count: number): Observable<string[]> {
    const urls = Array.from({ length: count }, () =>
      // backticks + correct host + actual Math.random()
      `https://picsum.photos/200/300?random=${Math.random()}`
    );
    const ms = 200 + Math.random() * 100;
    return of(urls).pipe(delay(ms));
  }
}
