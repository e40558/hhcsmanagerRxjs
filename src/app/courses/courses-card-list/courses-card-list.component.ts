import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../model/course-model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CourseDialogComponent } from '../course-dialog/course-dialog.component';
import { defaultDialogConfig } from '../shared/default-dialog-config';

@Component({
  selector: 'courses-card-list',
  templateUrl: './courses-card-list.component.html',
  styleUrls: ['./courses-card-list.component.scss']
})
export class CoursesCardListComponent {
  
  @Input()
  courses: Course[] =[];

  @Output()
  courseChanged = new EventEmitter();



  constructor(private dialog: MatDialog) {
  }

  ngOnInit() {

  }

  
  editCourse(course:Course) {

    const dialogConfig = defaultDialogConfig();

    dialogConfig.data = {
      dialogTitle:"Edit Course",
      course,
      mode: 'update'
    };

    this.dialog.open(CourseDialogComponent, dialogConfig)
      .afterClosed()
      .subscribe(() => this.courseChanged.emit());

}


 
  


  onDeleteCourse(course){}
}
