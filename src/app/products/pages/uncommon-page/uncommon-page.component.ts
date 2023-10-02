import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  // i18n Select
  public name: string = 'David';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };
  // i18n Plural
  public clients: string[] = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Jessica'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.'
  };

  changeClient(){
    this.name = 'Bea';
    this.gender = 'female';
  }

  deleteClient(){
    this.clients.shift();
  }

  // Key value pipe
  public person = {
    name: 'David',
    age: 32,
    addres: 'Cádiz, Spain'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap(x => console.log('tap:', x))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Hay info en la promesa');
      console.log('promesa');

    }, 3500);
  })
}
