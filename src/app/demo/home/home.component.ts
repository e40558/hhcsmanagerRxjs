import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ControlBase } from '../controls/controlBase-model';
import { ConsumerService } from '../consumer.service';

@Component({
  selector: 'demo-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers:  [ConsumerService]
})
export class HomeComponent {
  controls$: Observable<ControlBase<any>[]>;

  constructor(consumerService: ConsumerService) {
    this.controls$ = consumerService.getQuestions();
  }
}
