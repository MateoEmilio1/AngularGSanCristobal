import { Injectable } from '@angular/core';
import { EventsListComponent } from './events-list/events-list.component';
import { Evento } from './evento';
import { userInfo } from 'os';
import { id } from 'ethers/lib/utils';
// https://bobbyhadz.com/blog/typescript-object-literal-may-only-specify-known-properties#:~:text=The%20%22Object%20literal%20may%20only,names%20if%20you%20have%20any.


const events: Evento[] = [
	{
		id: 1,
		name: "Angular Connect",
		date: "9/26/2036",
		time: "10am",
		location: {
			address: "1 London Rd",
			city: "London",
			country: "England",
		},
	},
	{
		id: 2,
		name: "ng-nl",
		date: "4/15/2037",
		time: "9am",
		location: {
			address: "127 DT ",
			city: "Amsterdam",
			country: "NL",
		},
	},
	{
		id: 3,
		name: "ng-conf 2037",
		date: "4/15/2037",
		time: "9am",
		location: {
			address: "The Palatial America Hotel",
			city: "Salt Lake City",
			country: "USA",
		},
	},
	{
		id: 4,
		name: "UN Angular Summit",
		date: "6/10/2037",
		time: "8am",
		location: {
			address: "The UN Angular Center",
			city: "New York",
			country: "USA",
		},
	},
];

@Injectable({
  providedIn: 'root'
})
export class EventosService {

  constructor() { }


  getEventos(): Evento[] {
    return events;
  }

  getEventoById(id: string | null): Evento | undefined{
	if(!id){
		return undefined
	}
	return events.find(evento => evento.id === +id)

  }

}
