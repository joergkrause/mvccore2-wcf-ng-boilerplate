import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Machine } from '../viewmodels/machine';

@Injectable()
export class ApiService {

  dataUrl = 'api/data';
  machineUrl = 'api/data';

  constructor(private http: Http) {

  }

  public async getChartData(): Promise<Array<{ x: number, y: number, v: number }>> {
    return await this.http.get(this.dataUrl)
      .map(res => res.json() as Array<{ x: number, y: number, v: number }>)
      .toPromise();
  }

  public async getMachines(): Promise<Array<Machine>> {
    return await this.http.get(this.machineUrl)
      .map(res => res.json() as Array<Machine>)
      .toPromise();
  }

}