import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { AxiomSchedulerEvent } from './axiom-scheduler/axiom-scheduler.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  events : AxiomSchedulerEvent[];

  ngOnInit(): void {
    this.events = [
      {
        date: moment(Date.now()).add(-1,'hours'),
        data : {
          title : "Meeting #55564"
        }
      },
      {
        date: moment(Date.now()).add(-2,'hours'),
        data : {
          title : "Meeting #1334"
        }
      },
      {
        date: moment(Date.now()).add(-4,'hours'),
        data : {
          title : "Meeting #097"
        }
      }
      ,
      {
        date: moment(Date.now()).add(-12,'hours'),
        data : {
          title : "Meeting #545"
        }
      }
      ,
      {
        date: moment(Date.now()).add(-15,'hours'),
        data : {
          title : "Meeting #784"
        }
      }
    ].map(i=>new AxiomSchedulerEvent(i.date.toDate(),i.data));
  }


}