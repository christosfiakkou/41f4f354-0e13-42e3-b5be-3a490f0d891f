/**
 * Unit tests for PhotoService
 * ---------------------------
 * This test suite verifies that the PhotoService is created correctly.
 * 
 * Why this test is useful:
 * - Ensures the Angular dependency injection system provides the service.
 * - Confirms that the service class is properly set up and can be tested further.
 *
 * Suggestions for extension:
 * - Test the observable returned by `fetchPhotos(count)` for correct length.
 * - Verify that photo URLs are generated with the expected format.
 */

import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo.service';

describe('PhotoService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
