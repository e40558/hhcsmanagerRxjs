import { Component, ElementRef, ViewChild } from '@angular/core';
import { WidgetComponent } from '../widget/widget.component';
import { COURSES } from 'server/db-datarestore';
import { Course } from '../courses/model/course-model';
import { CourseCardComponent } from '../components/courses/course-card/course-card.component';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CoursesStore } from '../courses/service/courses-store';
@Component({
  selector: 'app-home',
 // standalone:true,
 // imports: [WidgetComponent],
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class AppHomeComponent {

    
  //templete ref
  @ViewChild('cardRef')
  card: CourseCardComponent;

  //ElementRef give you a 
  // a referene to native DOM Elements
  @ViewChild('courseImage')
  courseImage: ElementRef;


  promoTotal$: Observable<number> = new Observable<number>;
  courses$ : Observable<Course[]> = new Observable<Course[]>;
  beginnerCourses$ : Observable<Course[]> = new Observable<Course[]>;
  advancedCourses$ : Observable<Course[]> = new Observable<Course[]>;
  
  
  constructor( private dialog: MatDialog,
    private store: CoursesStore){}

  ngOnInit(): void {
    this.reloadCourses()
  }

  reloadCourses() {
    this.courses$ = this.store.courses$ ;  
   
    this.beginnerCourses$ = this.store.filterByCategory("BEGINNER");
    this.advancedCourses$ = this.store.filterByCategory("ADVANCED");
     //    this.advancedCourses$ = this.store.selectAdvancedCourse();
    //   this.beginnerCourses$ = this.store.selectBeginnerCourse();

    //  this.beginnerCourses$ = this.store.pipe(select(selectBeginnerCourses));

    //  this.advancedCourses$ = this.store.pipe(select(selectAdvancedCourses));

    //  this.promoTotal$ = this.store.pipe(select(selectPromoTotal));

}

ngAfterViewInit(){
 // console.log("courseImage", this.courseImage);
}


onCourseSelected(course:Course){
  console.log("containerDiv",this.courseImage);
}
}
