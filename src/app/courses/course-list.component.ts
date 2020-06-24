import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from './course';

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})
export class CourseListComponent implements OnInit {
    courses: Array<Course> = [];
    filteredCourses: Array<Course> = [];
    filterBy: string;

    constructor(private courseService: CourseService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.courseService.retrieveAll().subscribe({
            next: courses => {
                this.courses = courses;
                this.filteredCourses = this.courses;
            },
            error: err => console.log('error', err)
        });
    }

    public set filter(value: string) {
        this.filterBy = value;
        this.filteredCourses = this.courses.filter( f => f.name.toLocaleLowerCase().indexOf(this.filterBy.toLocaleLowerCase()) > -1);
    }

    public get filter(): string {
        return this.filterBy;
    }

    public delete(id: number): void {
        this.courseService.delete(id).subscribe({
            next: () => {
                console.log('Deleted with success');
                this.retrieveAll();
            },
            error: err => console.log('error', err)
        });
    }
}

