import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrls: ['./basic-page.component.css']
})
export class BasicPageComponent {

  public nameLower: string = 'david';
  public nameUpper: string = 'DAVID';
  public fullName: string = 'daVId MoREno';

  public customDate: Date = new Date();
}
