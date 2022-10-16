import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  user: User | undefined;

  constructor(private route: ActivatedRoute, private service: UsersService) { } //inyecto la ruta y el servicio (para poder usarlos)

  ngOnInit(): void {

    const id=this.route.snapshot.paramMap.get('id');  //Recomendado
    // es equivalente a
    //const id = this.route.snapshot.params['id'];

    this.user = this.service.getUserById(id); //( con el + lo paso como number)

    console.log(id);
  }



}
