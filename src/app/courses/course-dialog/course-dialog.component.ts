import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as moment from 'moment';
import { MessagesService } from 'src/app/messages/messages.service';
import { Course } from '../model/course-model';
import { CoursesStore } from '../service/courses-store';
import { LoadingService } from 'src/app/loading/loading.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-course-dialog',
  templateUrl: './course-dialog.component.html',
  styleUrls: ['./course-dialog.component.scss'],
  providers:[
    LoadingService,
    MessagesService
  ]
})
export class CourseDialogComponent {
  form: UntypedFormGroup;

    dialogTitle: string;

    course: Course;

    mode: 'create' | 'update';

    loading$: Observable<boolean>;

    constructor(
        private fb: UntypedFormBuilder,
        private dialogRef: MatDialogRef<CourseDialogComponent>,
        @Inject(MAT_DIALOG_DATA) data,
        private coursesStore: CoursesStore) {

        this.dialogTitle = data.dialogTitle;
        this.course = data.course;
        this.mode = data.mode;

        const formControls = {
            releasedAt:[''],
            title: ['', Validators.required],
            category: ['', Validators.required],
            longDescription: ['', Validators.required],
            message:[''],
            promo: ['', []]
        };

        if (this.mode == 'update') {
            this.form = this.fb.group(formControls);
            this.form.patchValue({...data.course});
        } else if (this.mode == 'create') {
            this.form = this.fb.group({
                ...formControls,
                url: ['', Validators.required],
                iconUrl: ['', Validators.required]
            });
        }
    }

    onClose() {
        this.dialogRef.close();
    }

    onSave() {

        const course: Course = {
            ...this.course,
            ...this.form.value
        };

        if (this.mode == 'update') {

            this.coursesStore.updateCourse(course.id,course);

            this.dialogRef.close();
        } else if (this.mode == 'create') {

            this.coursesStore.add(course)
                .subscribe(
                    newCourse => {

                        console.log('New Course', newCourse);

                        this.dialogRef.close();

                    }
                );

        }


    }
}
