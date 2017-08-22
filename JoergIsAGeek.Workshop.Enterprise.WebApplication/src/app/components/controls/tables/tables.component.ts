import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { AcDataGridModel } from 'svogv';
import { Base } from '../../../viewmodels/base';
import { ApiService } from '../../../services/apiservice';

@Component({
  moduleId: module.id,
  selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.css']
})
export class TablesComponent<T extends Base> implements OnInit {

    @Input()
    data: AcDataGridModel<T>;

    constructor(public router: Router) {
      console.log('Machine ctor');
    }

    ngOnInit() {
    }

    editMachine(data) {
      this.router.navigate(['/machine/edit', data.id]);
    }

    addMachine() {
      this.router.navigate(['/machine/new']);
    }

    removeMachine(data) {
      this.router.navigate(['/machine/delete', data.id]);
    }

    currentData: T;

    showModal(data) {
      this.currentData = data;
    }


}
