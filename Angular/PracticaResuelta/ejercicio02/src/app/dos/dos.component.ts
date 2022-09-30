import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css'],
  inputs: ['valorDos']
})
export class DosComponent implements OnInit {

  valorDos = 2;

  @Output() avisar= new EventEmitter<string>();

  constructor() { }

  avisarAlPadre(): void{
    this.avisar.emit('Hola desde el hijo (componenteDos)');
  }

  ngOnInit(): void {
  }

}
