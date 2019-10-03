import {Component, OnInit, Input, ViewEncapsulation, Injector} from '@angular/core';
import {AxiomHourSteps, AxiomSchedulerComponentCommon} from './../axiom-scheduler/axiom-scheduler.component';
import {AxiomSchedulerEvent} from './../axiom-scheduler/axiom-scheduler.component';
import {AxiomSchedulerHour} from './../axiom-scheduler-day-view/axiom-scheduler-day-view.component';
import {AxiomSchedulerService} from "../services/axiom-scheduler.service";
import * as momentNs from 'moment';

const moment = momentNs;

@Component({
  selector: '[ax-scheduler-hour]',
  templateUrl: './axiom-scheduler-hour.component.html',
  styleUrls: ['./axiom-scheduler-hour.component.scss'],
  encapsulation: ViewEncapsulation.None,
  host: {
    'class': 'ax-scheduler-hour'
  }
})
export class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() hour: AxiomSchedulerHour;
  @Input() steps: AxiomHourSteps;

  public inRnageEvents: AxiomSchedulerEvent[];
  public service: AxiomSchedulerService;

  hourSteps;
  maxHeight: number;

  constructor(injector: Injector) {
    super(injector);
  }

  public ngOnInit(): void {
    this.hourSteps = new Array(this.steps).fill(0).map((value, index) => index);
    this.refreshView();
  }

  public refreshView(): void {
    this.setInRangeEvent();
    this.hourSteps = new Array(this.steps).fill(0).map((value, index) => index);
    this.maxHeight = 100 / this.hourSteps.length;
  }

  private setInRangeEvent(): void {
    this.inRnageEvents = [];
  }

  clicked(number: number) {
    const minute = (60 / this.steps) * number;
    this.service.hourStepClicked(moment(this.hour.start).set({minute}));
  }
}
