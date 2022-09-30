import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css'],
  inputs: ['valorUno'], // se lo paso como parametro y lo uso como un metadato
})
export class UnoComponent implements OnInit {

  constructor() { }

  valorUno = 2; 

  ngOnInit(): void {
  }

}
