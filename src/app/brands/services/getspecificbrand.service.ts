import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetspecificbrandService {

  constructor(private _HttpClient : HttpClient) { }


  getSpecificBrand(id : any) : Observable <any> {

    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)

  }

}
