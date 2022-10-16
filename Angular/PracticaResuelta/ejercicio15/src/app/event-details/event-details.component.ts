import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventosService } from '../eventos.service';
import { Evento} from '../evento'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css']
})
export class EventDetailsComponent implements OnInit {

  evento: Evento | undefined;

  constructor(private route: ActivatedRoute, private service: EventosService) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    this.evento = this.service.getEventoById(id);

  }




}
