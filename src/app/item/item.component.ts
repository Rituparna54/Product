import { Component } from '@angular/core';
import { SharedService } from '../shared.service';
import { Idata } from '../Idata';
import {Observable} from 'rxjs'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  public response :Observable<Idata[]>;
  constructor(public service :SharedService){
    this.response=this.service.getPosts();
  }
}
