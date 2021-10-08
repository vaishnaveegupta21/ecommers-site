import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import{map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {

  constructor(private http: HttpClient) { }
  getProduct()
  {
    return this.http.get<any>("https://fakestoreapi.com/products/")
    .pipe(map((res:any) =>{
      return res;
    }))
  }
  ngOnInit(): void {
  }

}


