import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import * as moment from 'moment';
import { Cage } from 'src/app/shared/models/cage';

class Date {
  year: string;
  month: string;
  date: string;
  day!: string;

  private value: moment.Moment;
  constructor(value: moment.Moment) {
    this.value = value;
    this.year = this.value.format("yyyy");
    this.month = this.value.format("MM");
    this.date = this.value.format("DD");

    switch (this.value.day()) {
      case 0: {
        this.day = "日";
        break;
      }
      case 1: {
        this.day = "一";
        break;
      }
      case 2: {
        this.day = "二";
        break;
      }
      case 3: {
        this.day = "三";
        break;
      }
      case 4: {
        this.day = "四";
        break;
      }
      case 5: {
        this.day = "五";
        break;
      }
      case 6: {
        this.day = "六";
        break;
      }
    }
  }
}

@Component({
  selector: 'app-resource-scheduler',
  templateUrl: './resource-scheduler.component.html',
  styleUrls: ['./resource-scheduler.component.scss']
})
export class ResourceSchedulerComponent implements OnChanges {

  @Input({ required: true }) month!: moment.Moment;
  @Input() resources: Cage[] = [];
  @Input() events: any[] = [];

  calendar: Date[][] = [];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.initCalendar();
  }

  initCalendar() {
    const startDate = this.month.clone().startOf('month').startOf('week');
    const endDate = this.month.clone().endOf('month').endOf('week');

    this.calendar = [];
    while (startDate.isBefore(endDate)) {
      const week: Date[] = [];
      for (let i = 0; i < 7; i++) {
        week.push(new Date(startDate.clone()));
        startDate.add(1, "day");
      }
      this.calendar.push(week);
    }
  }
}