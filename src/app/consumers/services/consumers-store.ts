import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, catchError, map, shareReplay, tap, throwError } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LoadingService } from "src/app/loading/loading.service";
import { MessagesService } from "src/app/messages/messages.service";
import { Consumer } from "../models/consumer";


@Injectable({
    providedIn: 'root'
})

export class ConsumerStore {
    private subjectConsumers = new BehaviorSubject<Consumer[]>([]);
    consumers$: Observable<Consumer[]> = this.subjectConsumers.asObservable();
    consumer: Consumer;

    constructor(private http: HttpClient,
        private loading: LoadingService,
        private messages: MessagesService) {
        this.loadAllConsumers()

    }

    private loadAllConsumers() {
        const loadConsumers$ = this.http.get('http://localhost:9000/api/consumers')
            .pipe(
                map(response => response["consumers"]),
                catchError(err => {
                    const message = "Could not load consumers";
                    this.messages.showErrors(message);
                    console.log(message, err);
                    return throwError(err)
                }),
                tap(consumers => this.subjectConsumers.next(consumers))
            );
        this.loading.showLoaderUntilCompleted(loadConsumers$)
            .subscribe();
    }


}
