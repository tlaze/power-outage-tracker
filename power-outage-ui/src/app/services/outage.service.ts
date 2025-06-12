import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OutageService {
  private api = 'http://localhost:3000/outages';

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
}
