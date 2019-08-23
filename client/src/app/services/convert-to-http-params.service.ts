import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvertToHttpParamsService {

  constructor() {
  }

  static convertToHttpParams(data) {

    let snedData = new HttpParams();
    for (const i in data) {
      if (data.hasOwnProperty(i)) {

        snedData = snedData.set(i, data[i]);
      }
    }

    return snedData;
  }
}
