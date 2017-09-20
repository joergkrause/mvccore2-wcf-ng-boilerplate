import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/toPromise';

import { Injectable } from '@angular/core';
import { Machine } from '../viewmodels/machine';
import { ConfigService } from '../services/configservice';

@Injectable()
export class ApiService {


  constructor(private http: Http, private config: ConfigService) {
  }

  public async getChartData(): Promise<Array<{ x: number, y: number, v: number }>> {
    return await this.http.get(this.config.dataURI)
      .map(res => res.json() as Array<{ x: number, y: number, v: number }>)
      .toPromise();
  }

  public async getMachines(): Promise<Array<Machine>> {
    return await this.http.get(this.config.dataURI)
      .map(res => res.json() as Array<Machine>)
      .toPromise();
  }

}