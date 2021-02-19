import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  constructor() {}

  getCourses() {
    return [
      {
        id: 1,
        name: 'Angular Forms',
        imageUrl: '/assets/images/forms.png',
        price: 500.0,
        code: 'ATX-500',
        duration: 120,
        rating: 4.8,
        releaseDate: 'March, 3, 2020',
      },
      {
        id: 2,
        name: 'Angular HTTP',
        imageUrl: '/assets/images/http.png',
        price: 350.0,
        code: 'XPTO-237',
        duration: 80,
        rating: 4.4,
        releaseDate: 'April, 15, 2020',
      },
      {
        id: 3,
        name: 'React JS',
        imageUrl: '/assets/images/http.png',
        price: 200.0,
        code: 'AUD-1920',
        duration: 100,
        rating: 5.0,
        releaseDate: 'January, 20, 2021',
      },
    ];
  }
}
