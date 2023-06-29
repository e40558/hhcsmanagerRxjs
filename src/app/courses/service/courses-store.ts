import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, shareReplay, tap, throwError } from "rxjs";
import { Course, sortCoursesBySeqNo } from "../model/course-model";
import { HttpClient } from "@angular/common/http";
import { LoadingService } from "src/app/loading/loading.service";
import { MessagesService } from "src/app/messages/messages.service";


@Injectable({
    providedIn: 'root'
})
export class CoursesStore {

    private subjectCourses = new BehaviorSubject<Course[]>([]);
    courses$: Observable<Course[]> = this.subjectCourses.asObservable();


    constructor(
        private http: HttpClient,
        private loading: LoadingService,
        private messages: MessagesService
    ) {
        this.loadAllCourses();
    }

    private loadAllCourses() {
        const loadCourses$ = this.http.get('http://localhost:9000/api/courses')
            .pipe(
                map(response => response["courses"]),
                catchError(err => {
                    const message = "Could not load courses";
                    this.messages.showErrors(message);
                    console.log(message, err);
                    return throwError(err)
                }),
                tap(courses => this.subjectCourses.next(courses))
            );
        this.loading.showLoaderUntilCompleted(loadCourses$)
            .subscribe();
    }


    updateCourse(courseId: number, changes: Partial<Course>): Observable<any> {

        const courses = this.subjectCourses.getValue();

        const index = courses.findIndex(course => course.id == courseId);

        const newCourse: Course = {
            ...courses[index],
            ...changes
        };

        const newCourses: Course[] = courses.slice(0);

        newCourses[index] = newCourse;

        this.subjectCourses.next(newCourses);

        return this.http.patch(`http://localhost:9000/api/courses/${courseId}`, changes)
            .pipe(
                catchError(err => {
                    const message = "Could not save course";
                    console.log(message, err);
                    this.messages.showErrors(message);
                    return throwError(err);
                }),
                shareReplay()
            );
    }

    add(course:Course) {

        return this.http.post(`http://localhost:9000/api/courses/`, course)
        .pipe(
            catchError(err => {
                const message = "Could not save course";
                console.log(message, err);
                this.messages.showErrors(message);
                return throwError(err);
            }),
            shareReplay()
        );

    }


    filterByCategory(category: string): Observable<Course[]> {
        return this.courses$
            .pipe(
                map(courses =>
                    courses.filter(course => course.category == category)
                        .sort(sortCoursesBySeqNo)
                )
            )

    }



}