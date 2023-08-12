import { EventEmitter, Injectable } from "@angular/core";
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
    //provide event which we can triger it in one componnent and listen to it in another
  statusUpdated = new EventEmitter<string>();

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