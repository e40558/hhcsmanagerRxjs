import { Component, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import { Course } from 'src/app/courses/model/course-model';
import { CourseImageComponent } from '../../courses/course-image/course-image.component';

@Component({
  selector: 'app-consumers-card',
  templateUrl: './consumers-card.component.html',
  styleUrls: ['./consumers-card.component.scss']
})
export class ConsumersCardComponent {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;

  constructor() {

  }

  ngAfterViewInit() {

  }

  ngAfterContentInit() {

  }

  ngOnInit() {

  }

  isImageVisible() {
      return this.course && this.course.iconUrl;
  }

  onCourseViewed() {

      this.courseEmitter.emit(this.course);

  }

  cardClasses() {
      if (this.course.category == 'BEGINNER') {
          return 'beginner';
      }
      return ""
  }

  cardStyles() {
      return {
          'background-image': 'url(' + this.course.iconUrl + ')'

      };
  }
}
