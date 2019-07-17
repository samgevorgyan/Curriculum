import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {ConvertToHttpParamsService} from './convert-to-http-params.service';


@Injectable({
  providedIn: 'root'
})

@Injectable()
export class HttpService {

  constructor(
    private http: HttpClient,
  ) {
  }


  getData(url, callback, errorCallback) {
    this.http.get(url, callback)
      .subscribe(
        (data: any) => {
          callback(data);

        }, error => {
          if (error.status === 401) {

          }

          this.handleError(error);
          errorCallback(error);
        });

  }

  postData(url, data: any, callback, errorCallback) {

    this.http.post<any>(url, ConvertToHttpParamsService.convertToHttpParams(data))
      .subscribe(
        (data_res: any) => {
          callback(data_res);

        }, error => {
          if (error.status === 401) {

          }
          console.log(error, 'postData error postData error postData error');
          errorCallback(error);
          this.handleError(error);
        });

  }

  putData(url, data: any, callback, errorCallback) {

    this.http.put<any>(url, ConvertToHttpParamsService.convertToHttpParams(data))
      .subscribe(
        (data_res: any) => {
          callback(data_res);

        }, error => {
          if (error.status === 401) {

          }
          console.log(error, 'putData error putData error putData error');
          this.handleError(error);
          errorCallback(error);
        });

  }

  deleteData(url, callback, errorCallback) {

    this.http.delete<any>(url)
      .subscribe(
        (data_res: any) => {
          callback(data_res);

        }, error => {
          if (error.status === 401) {

          }
          console.log(error, 'deleteData error deleteData error deleteData error');
          this.handleError(error);
          errorCallback(error);
        });

  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.log(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.status}`);
    }
    // return an observable with a user-facing error message

  }

}
