import { Injectable } from '@angular/core';

import { of } from 'rxjs';
import { ControlBase } from './controls/controlBase-model';
import { Dropdown } from './controls/dropDown';
import { Textbox } from './controls/textbox';
import { Checkbox } from './controls/checkbox';

@Injectable()
export class ConsumerService {

  // TODO: get from a remote source of question metadata
  getQuestions() {

    const controls: ControlBase<string>[] = [

     new Checkbox({
      key: 'brave',
      label: 'Bravery Rating',
      order: 4
     }),

      new Dropdown({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          {key: 'solid',  value: 'Solid'},
          {key: 'great',  value: 'Great'},
          {key: 'good',   value: 'Good'},
          {key: 'unproven', value: 'Unproven'}
        ],
        order: 3
      }),

      new Textbox({
        key: 'firstName',
        label: 'First name',
        value: 'Bombasto',
        required: true,
        type:'text',
        order: 1
      }),

      new Textbox({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2
      })
    ];

    return of(controls.sort((a, b) => a.order - b.order));
  }
}