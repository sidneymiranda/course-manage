import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];

  _filteredBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.getCourses();
    this.filteredCourses = this._courses;
  }

  set filter(value: string) {
    this._filteredBy = value;
    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name
          .toLocaleLowerCase()
          .indexOf(this._filteredBy.toLocaleLowerCase()) > -1
    );
  }

  get filter() {
    return this._filteredBy;
  }
}
