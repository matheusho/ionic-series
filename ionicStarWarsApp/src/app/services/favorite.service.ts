import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'favoriteFilms';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private storage: Storage) { }

  getAllFavoritesFilms() {
    return this.storage.get(STORAGE_KEY);
  }

  isFavorite(id: string) {
    return this.getAllFavoritesFilms().then((result: any) => {
      return result && result.includes(id) !== -1;
    });
  }

  favoriteFilm(id: string) {
    return this.getAllFavoritesFilms().then((result: any) => {
      if (result) {
        result.push(id);
        return this.storage.set(STORAGE_KEY, result);
      } else {
        return this.storage.set(STORAGE_KEY, [id]);
      }
    });
  }

  unfavoriteFilm(id: string) {
    return this.getAllFavoritesFilms().then((result: any) => {
      if (result) {
        const index = result.includes(id);
        result.splice(index, 1);

        return this.storage.set(STORAGE_KEY, result);
      }
    })
  }
}
