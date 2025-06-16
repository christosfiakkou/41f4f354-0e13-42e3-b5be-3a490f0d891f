import { TestBed } from '@angular/core/testing';

import { FavoritesService } from './favorites.service';

describe('FavoritesService', () => {
  let service: FavoritesService;
  const KEY = 'myFavorites';

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavoritesService);
    localStorage.removeItem(KEY);
  });

  it('should start empty', () => {
    expect(service.getAll()).toEqual([]);
  });

  it('should add and retreive', () => {
    service.add('url1')
    expect(service.getAll()).toEqual(['url1']);
    service.add('url2')
    expect(service.getAll()).toEqual(['url1','url2']);
  });

  it('should not duplicate entries', () => {
    service.add('url1')
    service.add('url1')
    expect(service.getAll()).toEqual(['url1']);
  });

  it('should remove entries', () => {
    service.add('a')
    service.add('b')
    service.remove('a');
    expect(service.getAll()).toEqual(['b']);
  });

  it('should correctly report isFavorite()', () => {
    expect(service.isFavorite('x')).toBeFalse();
    service.add('x')
    expect(service.isFavorite('x')).toBeTrue();
  });


});
