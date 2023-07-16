import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, shareReplay, tap, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LoadingService } from "src/app/loading/loading.service";
import { MessagesService } from "src/app/messages/messages.service";
import { Lesson } from "../models/lesson-model";


@Injectable({
    providedIn: 'root'
})

export class LocationsStore {
    private subjectLessons = new BehaviorSubject<Lesson[]>([]);
    lessons$: Observable<Lesson[]> = this.subjectLessons.asObservable();
    

    constructor(private http: HttpClient,
        private loading: LoadingService,
        private messages: MessagesService) {
        this.loadAllLessons()

    }

    private loadAllLessons() {
        const loadLessons$ = this.http.get('http://localhost:9000/api/lessons')
            .pipe(
                map(response => response["lessons"]),
                catchError(err => {
                    const message = "Could not load lessons";
                    this.messages.showErrors(message);
                    console.log(message, err);
                    return throwError(err)
                }),
                tap(lessons => this.subjectLessons.next(lessons))
            );
        this.loading.showLoaderUntilCompleted(loadLessons$)
            .subscribe();
    }


    toggleLessonViewed(toggled:Lesson) {

        const lessons = this.subjectLessons.getValue();
        
        const index = lessons.findIndex(lesson => lesson.id == toggled.id);

        const newLesson: Lesson = {
            ...lessons[index],
       };             
    
       newLesson.completed = ! newLesson.completed;
        this.subjectLessons.next(lessons);
    }


}