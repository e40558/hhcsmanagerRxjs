import { Component } from '@angular/core';
import { Lesson } from './models/lesson-model';
import { LocationsStore } from './services/lessons-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.scss']
})
export class LessonsComponent {

  lessons$: Observable<Lesson[]> = new Observable<Lesson[]>
 
  constructor ( private store: LocationsStore){

  }

  

   ngOnInit(): void {
    this.reloadLessons()
  }

  reloadLessons() {
    this.lessons$ = this.store.lessons$;
  
}

    





}
