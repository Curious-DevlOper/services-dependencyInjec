import { Injectable } from "@angular/core";
import { LoggingService } from "./logging.service";

@Injectable() //add some metadata to inject service

export class AccountsService {
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
    // using service inside another service
    constructor(private loggingService: LoggingService){}

    //push new account int array
  addAccount(name: string, status:string) {
      this.accounts.push({name: name, status: status});
      this.loggingService.logStatusChange(status);
  }
  updateAccount(id: number, status:string) {
      this.accounts[id].status = status;
  }
}