import { Component, OnInit, Renderer } from '@angular/core';
//import { TasksCore } from '../app/tasks.core';
//import { SyncAPI } from '../app/sync.api';
import { Account } from './account.type';

@Component({
    selector: 'account',
    templateUrl: './account.template.html',
    providers: []
})
export class AccountComponent implements OnInit {
    public accountList: Array<Account> = [];

    constructor(){
        let a = new Account();
        a.acc_id = "001";
        a.acc_name = "CAPITAL";
        a.acc_ctg_type = 4;
        a.acc_comment = "Capital Account";
        a.acc_check_day = 1;
        a.acc_average_min_balance = 0;
        a.acc_payment_day = 0;

        this.accountList.push(a);

        a = new Account();
        a.acc_id = "002";
        a.acc_name = "Mosho Cartera";
        a.acc_ctg_type = 1;
        a.acc_comment = "Efectivo";
        a.acc_check_day = 1;
        a.acc_average_min_balance = 0;
        a.acc_payment_day = 0;
        this.accountList.push(a);
    }

    ngOnInit(){

    }

    showNewAccountForm(){
        
    }
}