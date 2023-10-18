import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Cage } from 'src/app/shared/models/cage';

@Component({
  selector: 'app-resource-scheduler',
  templateUrl: './resource-scheduler.component.html',
  styleUrls: ['./resource-scheduler.component.scss']
})
export class ResourceSchedulerComponent {

  @Input({ required: true }) month!: moment.Moment;
  @Input() resources: Cage[] = [];
  @Input() events: any[] = [];

  constructor() {
    console.log(moment().year());
    console.log(moment().month());
    console.log(moment().week());
    console.log(moment().startOf('week'));
    console.log(moment().endOf('week'));
    console.log(moment().startOf('month'));
    console.log(moment().endOf('month').endOf('week'));
    console.log(moment().year(2024).month(3).endOf('month'))
  }
}