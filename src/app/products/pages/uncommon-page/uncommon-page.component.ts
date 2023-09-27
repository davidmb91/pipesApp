import { Component } from '@angular/core';

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
  public clients: string[] = ['John', 'Jane', 'Michael', 'Emily', 'David', 'Sarah', 'Christopher', 'Jennifer', 'Matthew', 'Jessica'];
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
}
