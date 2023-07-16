import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { WidgetComponent } from './widget/widget.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { CardComponent } from './card/card.component';
import { LessonsComponent } from './lessons/lessons.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/lessons",
    pathMatch: "full"
  },
  
  {path:"lessons", component:LessonsComponent},
  
  {path:"home", component:AppHomeComponent},
  {path:"widget" , component:WidgetComponent},

  {path: 'register' , component:RegisterComponent},
  {
    path: 'consumers',
    loadChildren: () => import('./consumers/consumers.module').then(m => m.ConsumersModule),
  //  canActivate: [AuthGuard]
  },
  {
    path: 'medical',
    loadChildren: () => import('./medical/medical.module').then(m => m.MedicalModule),
  //  canActivate: [AuthGuard]
  },
  {
    path: 'demo',
    loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule),
 //   canActivate: [AuthGuard]
  },
  {
    path: 'courses',
    loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule),
 //   canActivate: [AuthGuard]
  },
  {
    path: 'locations',
    loadChildren: () => import('./locations/locations.module').then(m => m.LocationsModule),
  //  canActivate: [AuthGuard]
  },
  {
    path: 'tours',
    loadChildren: () => import('./tours/tours.module').then(m => m.ToursModule),
   // canActivate: [AuthGuard]
  },
  {
    path: '**',
    redirectTo: '/'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
