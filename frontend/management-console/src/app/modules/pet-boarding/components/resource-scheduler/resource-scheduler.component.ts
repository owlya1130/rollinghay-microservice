import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { Cage } from 'src/app/shared/models/cage';

@Component({
  selector: 'app-resource-scheduler',
  templateUrl: './resource-scheduler.component.html',
  styleUrls: ['./resource-scheduler.component.scss']
})
export class ResourceSchedulerComponent implements OnChanges {

  @Input({ required: true }) month!: moment.Moment;
  @Input() resources: Cage[] = [];
  @Input() events: any[] = [];

  calendar: string[][] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.initCalendar();
  }

  initCalendar() {
    const startDate = this.month.clone().startOf('month').startOf('week');
    const endDate = this.month.clone().endOf('month').endOf('week');

    this.calendar = [];
    while (startDate.isBefore(endDate)) {
      const week: string[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(startDate.format("yyyy/MM/DD"));
        startDate.add(1, "day");
      }
      this.calendar.push(week);
    }
  }
}