import { Component, Input} from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // no need for the output
  ///@Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsSrvice: AccountsService){};

  onSetTo(status: string) {
    this.accountsSrvice.updateAccount(this.id, status);
    //this.loggingService.logStatusChange(status);
    this.accountsSrvice.statusUpdated.emit(status); //emit an event here and listen t it in newAccount
  }

}
