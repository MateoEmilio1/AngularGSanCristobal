import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dos',
  templateUrl: './dos.component.html',
  styleUrls: ['./dos.component.css']
})
export class DosComponent implements OnInit {

  @Input() valorDos = 2;

  constructor() { }

  ngOnInit(): void {
  }

}
