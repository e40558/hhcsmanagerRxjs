import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from 'src/app/courses/model/course-model';

@Component({
  selector: 'com-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})
export class CourseCardComponent {
 
  course:Course;

  @Input()
  courses: Course[] =[];

  @Output('courseSelected')
  //courseSelected = new EventEmitter<Course>();
    courseEmitter = new EventEmitter<Course>();
    rseEmiter  
   onCourseViewed(){
    console.log("card component - button clicked...")
    //this.courseSelected.emit(this.course) 
    this.courseEmitter.emit(this.course) 
 
  }
}
