import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18 Select
  public name: string = 'Fernando';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changeClient():void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18Plural
  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Eduardo', 'Melisa', 'Natalia'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos esperando',
    'other': 'tenemos # clientes esperando',
  }

  deleteClient():void {
    this.clients.shift();
  }

  //keyValue Pipe
  public person = {
    name: 'Fernando',
    age: 34,
    address: 'Ottowa, Character'
  }

  //Async Pipe
  public myObservableTimer = interval(2000).pipe(
    tap( value => console.log('tap', value) )
  );

  public promiseValue: Promise<string> = new Promise( ( resolve, reject ) => {
    setTimeout( () => {
      resolve( 'Tenemos data en la promeas' );
    }, 3500);
  });






}
