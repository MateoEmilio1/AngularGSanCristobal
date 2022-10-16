import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import {Evento} from "../evento"

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  public eventos!: Evento[];

  constructor(private eventosService: EventosService) { }

  ngOnInit() {
    this.eventos  = this.eventosService.getEventos();
  }

}
