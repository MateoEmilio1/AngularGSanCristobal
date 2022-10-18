import { Component, OnInit } from '@angular/core';
import { EventosService } from '../eventos.service';
import {Evento} from "../evento"
import { EventosResolver } from '../eventos.resolver';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css','../app.component.css']
})
export class EventsListComponent implements OnInit {

  public eventos!: Evento[];
  

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { 
    
  }

  ngOnInit() {
    //this.eventos  = this.eventosService.getEventos();
    this.activatedRoute.data.subscribe(({ list }) => {
      this.eventos = list;
    });

    
  }

  goDown() {
    this.router.navigate([], { fragment: "target" });
  }

}
