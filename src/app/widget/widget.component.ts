import { Component, Input, TemplateRef, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { WidgetActions } from './WidgetActions';
import { WidgetState } from './widgetState';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'widget',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.scss'],
  providers:[WidgetState,WidgetActions]
})
export class WidgetComponent {
  @Input()
  headerTemplate!: TemplateRef<any>;
 state = inject(WidgetState);
 actions= inject(WidgetActions);

 


}
