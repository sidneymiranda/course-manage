import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit{

    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular Forms',
                imageUrl: '/assets/images/forms.png',
                price: 500.00,
                code: 'ATX-500',
                duration: 120,
                rating: 4.8,
                releaseDate: 'March, 3, 2020'
            },

            {
                id: 2,
                name: 'Angular HTTP',
                imageUrl: '/assets/images/http.png',
                price: 350.00,
                code: 'XPTO-237',
                duration: 80,
                rating: 4.4,
                releaseDate: 'April, 15, 2020'
            }

        ] 
    }




}