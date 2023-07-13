import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CoursesStore } from './courses/service/courses-store';
import { WidgetComponent } from './widget/widget.component';

@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',

  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  loading = true;

  isLoggedIn$: Observable<boolean> = new Observable<boolean>;

  isLoggedOut$: Observable<boolean> = new Observable<boolean>;

  title = 'hhcsmanagerRxjs';

  constructor(
    private router: Router,
    public store: CoursesStore,
    private cdr: ChangeDetectorRef
    ) {

  }
  ngOnInit(): void {
  
  }

  logout() {
   // this.store.dispatch(logout());
  }
}
