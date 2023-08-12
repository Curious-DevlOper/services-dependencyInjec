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
    //push new account int array
  addAccount(name: string, status:string) {
      this.accounts.push({name: name, status: status});
  }
  updateAccount(id: number, status:string) {
      this.accounts[id].status = status;
  }
}