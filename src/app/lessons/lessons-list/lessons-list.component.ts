import { Component, Input } from '@angular/core';
import { Lesson } from '../models/lesson-model';

@Component({
  selector: 'lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.scss']
})
export class LessonsListComponent {

  @Input()
  lessons: Lesson[] = [];

  toggleLessonViewed(lesson:Lesson) {
    console.log('toggling lesson ...');
  //  store.toggleLessonViewed(lesson);
}

delete(deleted:Lesson) {
 //   store.deleteLesson(deleted);
}


}
