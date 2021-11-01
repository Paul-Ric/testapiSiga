import {HttpClient} from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dados } from '../models/api.models';

@Injectable({
  providedIn: 'root'
})
export class ApisigaService {

  constructor(private http: HttpClient) { }

  public getDados():Observable<Dados>{
    return this.http.get(`http://54.39.202.243/webrunstudio/DadosDoEvento.rule?sys=SIG&id=3523&key=2AF5B586-3955-4D7E-937F-D72545F21466`)
  }
}
