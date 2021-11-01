import { ApisigaService } from './../../services/apisiga.service';
import { Component, OnInit } from '@angular/core';
import { Dados } from 'src/app/models/api.models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  dados?:Array<Dados>
  error?: any
  constructor(
    private ApisigaService: ApisigaService,
    

  ) {
    this.getApi()

  }

  ngOnInit(): void {
  }

  getApi() {
    this.ApisigaService.getDados().subscribe(
      (data: Dados) => {
        this.dados = data
        console.log("test", data)
      }, (error: any) => {
        this.error = error
        console.error(error)
      })
  }

}
