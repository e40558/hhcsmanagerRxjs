import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatMomentDateModule } from "@angular/material-moment-adapter";



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './loading/loading.component';
import { MessagesComponent } from './messages/messages.component';
import { LoadingService } from './loading/loading.service';
import { MessagesService } from './messages/messages.service';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './dynamic-field/dynamic-field.component';
import { DynamicCheckboxComponent } from './dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicInputComponent } from './dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicRadioComponent } from './dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicSelectComponent } from './dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicErrorComponent } from './dynamic-form/dynamic-error/dynamic-error.component';
import { CardComponent } from './card/card.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ConsumersCardComponent } from './components/consumers/consumers-card/consumers-card.component';
import { ConsumersImageComponent } from './components/consumers/consumers-image/consumers-image.component';
import { CourseImageComponent } from './components/courses/course-image/course-image.component';
import { CourseCardComponent } from './components/courses/course-card/course-card.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsListComponent } from './lessons/lessons-list/lessons-list.component';

@NgModule({
  declarations: [
    AppHomeComponent,
    AppComponent,
    LoadingComponent,
    MessagesComponent,
    RegisterComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    DynamicCheckboxComponent,
    DynamicRadioComponent,
    DynamicSelectComponent,
    DynamicInputComponent,
    DynamicErrorComponent,
    CardComponent,
    ConsumersCardComponent,
    ConsumersImageComponent,
    CourseImageComponent,
    CourseCardComponent,
    LessonsComponent,
    LessonsListComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    

    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatTabsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMomentDateModule,
    MatSelectModule,
    MatDatepickerModule,    
    BrowserAnimationsModule,
    HttpClientModule
    


    
  ],
  providers: [
    LoadingService,
    MessagesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
