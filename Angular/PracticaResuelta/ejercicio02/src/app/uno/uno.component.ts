import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-uno',
  templateUrl: './uno.component.html',
  styleUrls: ['./uno.component.css']
})
export class UnoComponent implements OnInit {

  constructor() { }

  @Input() valorUno = 2; 

  ngOnInit(): void {
  }

}