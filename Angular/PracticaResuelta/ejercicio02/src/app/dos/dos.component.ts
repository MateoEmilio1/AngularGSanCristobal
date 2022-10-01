import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { OrigenService } from '../origen.service';


@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css'],
  inputs: ['valorDos']
})
export class DosComponent implements OnInit {

  valorDos = 2;

  @Output() avisar= new EventEmitter<string>();

  constructor(private service: OrigenService) {
    console.log("contruyo el component dos");
   }

  avisarAlPadre(): void{
    this.avisar.emit('Hola desde el hijo (componenteDos)');
  }

  ngOnInit(): void {
  }

}
