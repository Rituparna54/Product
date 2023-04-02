import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Product';
result : any ;
  constructor(private http:HttpClient)
  {
    
    this.http.get("https://fakestoreapi.com/products").subscribe(data=>{console.log(data)} ,
      err=>{console.log("error occured")}
      );
  
}
 
}
