import { Component } from '@angular/core';
//access some data from an array of users
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'services-dependencyInjection';
  accounts = [
    {
      name: 'Master Account' ,
      status: 'active'
    },
    {
      name: 'Test Account' ,
      status: 'inactive'
    },
    {
      name: 'Hidden Account' ,
      status: 'Unknown'
    }
  ];

  onAccountAdded( newAccount: {name: string, status: string}){
    this.accounts.push(newAccount);
  }

  onStatusChanged(updateInfo: {id: number, newStatus: string}){
    this.accounts[updateInfo.id].status = updateInfo.newStatus; 
}
}