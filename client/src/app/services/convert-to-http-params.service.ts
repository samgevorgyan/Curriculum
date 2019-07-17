import {Injectable} from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConvertToHttpParamsService {

  constructor() {
  }

  static convertToHttpParams(data) {
    // console.log('data data data', data);
    let snedData = new HttpParams();
    for (const i in data) {
      if (data.hasOwnProperty(i)) {
        // console.log('asdasdsa');
        snedData = snedData.set(i, data[i]);
      }
    }
    // console.log('snedData snedData a', snedData);
    return snedData;
  }
}
