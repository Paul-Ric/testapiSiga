import { Result } from './../../models/result.models';
import { ApisigaService } from './../../services/apisiga.service';
import { Component, OnInit } from '@angular/core';
import { Dado } from 'src/app/models/dado.models';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  result: Result
  error?: any
  
  constructor(
    private ApisigaService: ApisigaService
  ) {
    this.result = new Result();
    this.getApi()
  }

  ngOnInit(): void {
  }

  getApi() {
    this.ApisigaService.getDados().subscribe(
      (data: Result) => {
       this.result = data       
        if(data.success) {
          console.log("test", data)
        } else {
          console.log(data.msg)
        }
        
      }
    )}
  }



