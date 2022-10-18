import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { EventosService } from '../eventos.service';
import { Evento} from '../evento'

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.css','../app.component.css']
})
export class EventDetailsComponent implements OnInit {

  evento: Evento | undefined;
  eventoRevisad: boolean = false;


  constructor(private route: ActivatedRoute, 
              private service: EventosService,
              private ruta: Router,) { }

  ngOnInit(): void {
    
    let id = this.route.snapshot.paramMap.get('id');
    this.evento = this.service.getEventoById(id);

  }

  returnToEvents(){
    this.ruta.navigateByUrl("/eventos");

  }

  eventoRevisado(){
    this.eventoRevisad = !this.eventoRevisad
  }

    
    


}
