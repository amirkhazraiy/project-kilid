import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor(private http: HttpClient) {
  }

  public decode(body: any) {
    return this.http.post(environment.apiUrl + '/seo_legacy_api/url/decode/v2.0', body);
  }

  public seo(body: any) {
    return this.http.post(environment.apiUrl + '/seo_legacy_api/url/url/seo/v2.0', body);
  }

  public listingSearch(body: any) {
    return this.http.post(environment.apiUrl + '/api/listing/search/portal/v2.0?sort=date,DESC', body);
  }

}
