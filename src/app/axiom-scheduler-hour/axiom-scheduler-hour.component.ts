import { AxiomSchedulerComponentCommon } from './../axiom-scheduler/axiom-scheduler.component';
import { Component, OnInit, Input, ViewEncapsulation, Injector } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerEvent } from '../axiom-scheduler/axiom-scheduler.component';
import { AxiomSchedulerHour } from '../axiom-scheduler-day-view/axiom-scheduler-day-view.component';

@Component({
  selector: '[ax-scheduler-hour]',
  templateUrl: './axiom-scheduler-hour.component.html',
  styleUrls: ['./axiom-scheduler-hour.component.scss'],
  encapsulation : ViewEncapsulation.None,
  host:{
    'class' : 'ax-scheduler-hour'
  }
})
export class AxiomSchedulerHourComponent extends AxiomSchedulerComponentCommon implements OnInit {

  @Input() hour : AxiomSchedulerHour;
  inRnageEvents : AxiomSchedulerEvent[];
  minuteRows : { events : AxiomSchedulerEvent[] , minute : number }[];

  constructor(injector : Injector) { 
    super(injector);
  }

  ngOnInit() {
    this.refreshView();
  }

  refreshView() : void{
    this.minuteRows = Array(60).fill(0).map((x,i)=>{
      return { events : [] , minute : i };
    });
    this.setInRangeEvent();
  }

  private setInRangeEvent(){
    this.inRnageEvents = [];
  }

}
