import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map, shareReplay} from 'rxjs/operators';
import { Course } from '../model/course-model';
import { Lesson } from '../model/lesson.model';


@Injectable({
    providedIn:'root'
})
export class CoursesService {

    constructor(private http:HttpClient) {

    }
    findLessons(
        courseId:number, filter = '', sortOrder = 'asc',
        pageNumber = 0, pageSize = 3):  Observable<Lesson[]> {

        return this.http.get(`http://localhost:9000/api/courses/175/lessons`, {
            params: new HttpParams()
                //.set('courseId', courseId.toString())
                .set('filter', filter)
                .set('sortOrder', sortOrder)
                .set('pageNumber', pageNumber.toString())
                .set('pageSize', pageSize.toString())
        }).pipe(
            map(res =>  res["lessons"])
        );
    }

    loadCourseById(courseId:number) {
       return this.http.get<Course>(`/api/courses/${courseId}`)
            .pipe(
              shareReplay()
            );
    }

    loadAllCourseLessons(courseId:number): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/api/lessons', {
            params: {
                pageSize: "10000",
                courseId: courseId.toString()
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }

    loadAllCourses(): Observable<Course[]> {
        return this.http.get<Course[]>("http://localhost:9000/api/courses")
            .pipe(
                map(res => res["courses"]),
                shareReplay()
            );
    }


    saveCourse(courseId:string, changes: Partial<Course>):Observable<any> {
        return this.http.put(`/api/courses/${courseId}`, changes)
            .pipe(
                shareReplay()
            );
    }


    searchLessons(search:string): Observable<Lesson[]> {
        return this.http.get<Lesson[]>('/api/lessons', {
            params: {
                filter: search,
                pageSize: "100"
            }
        })
            .pipe(
                map(res => res["payload"]),
                shareReplay()
            );
    }


}
