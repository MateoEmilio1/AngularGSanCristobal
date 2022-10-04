import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import {Event} from "../eventos.service"

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public events!: Event[];

  constructor(private eventos: EventosService) { }

  ngOnInit() {
    this.events  = this.eventos.getEventos();
  }

}
