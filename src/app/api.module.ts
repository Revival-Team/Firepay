import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class Api {
  uri = 'https://api.crm.goldadvance.ru/v1/';
  response: object;

  constructor(public http: HttpClient, public router: Router) {

  }

  /**
   * Запрос на сервер API
   *
   * @param requestMethod
   * @param apiMethod
   * @param requestData
   */
  request(requestMethod: string, apiMethod: string, requestData: object): object {
    if (requestMethod === 'POST') {
      // POST REQUEST
      this.response = this.http.post(this.prepareUrl(apiMethod), requestData)
        .subscribe((resp: any) => {
          return resp;
        });
    } else {
      // GET REQUEST
      this.response = this.http.get(this.prepareUrl(apiMethod), requestData)
        .subscribe((resp: any) => {
          return resp;
        });
    }

    return this.response;
  }

  /**
   * @param apiMethod
   */
  prepareUrl(apiMethod: string): string {
    return this.uri + apiMethod;
  }
}
