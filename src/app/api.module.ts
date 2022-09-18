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
  request(requestMethod: string, apiMethod: string, requestData: object): string {
    if (requestMethod === 'POST') {
      // POST REQUEST
      this.http.post(this.prepareUrl(apiMethod), requestData)
        .subscribe((resp: any) => {
          this.updateResponse(resp);
        });
    } else {
      // GET REQUEST
      this.http.get(this.prepareUrl(apiMethod), requestData)
        .subscribe((resp: any) => {
          this.updateResponse(resp);
        });
    }

    return this.getResponse();
  }

  /**
   * Обновляем ответ от сервера
   *
   * @param data
   */
  updateResponse(data: object): object {
    return this.response = data;
  }

  /**
   * Получить последний ответ
   */
  getResponse(): string {
    return JSON.stringify(this.response);
  }

  /**
   * Преобразуем URL запроса
   *
   * @param apiMethod
   */
  prepareUrl(apiMethod: string): string {
    return this.uri + apiMethod;
  }
}
