import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsumersRoutingModule } from './consumers-routing.module';
import { HomeComponent } from './home/home.component';
import { ConsumersCardComponent } from './consumers-card/consumers-card.component';
import { ConsumersListComponent } from './consumers-list/consumers-list.component';


@NgModule({
  declarations: [
    HomeComponent,
    ConsumersCardComponent,
    ConsumersListComponent
  ],
  imports: [
    CommonModule,
    ConsumersRoutingModule
  ]
})
export class ConsumersModule { }
