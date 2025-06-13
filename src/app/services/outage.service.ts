import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OutageService {
  private api = `${environment.apiUrl}/outages`;

  constructor(private http: HttpClient) { }

  create(outage:{ location:string; description: string }){
    return this.http.post(this.api, outage)
  }

  getAllOutages(){
    return this.http.get(this.api);
  }

  resolve(id:number){
    return this.http.patch(`${this.api}/${id}/resolve`, {})
  }

  delete(id: number) {
    return this.http.delete(`${this.api}/${id}`)
  }

}
