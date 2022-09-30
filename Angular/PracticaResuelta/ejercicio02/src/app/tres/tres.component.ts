import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tres',
  templateUrl: './tres.component.html',
  styleUrls: ['./tres.component.css'],
  inputs: ['valorTres']
})
export class TresComponent implements OnInit {

  constructor() { }

  @Input('otroValor') valorTres = 3;
  

  ngOnInit(): void {
  }

}
