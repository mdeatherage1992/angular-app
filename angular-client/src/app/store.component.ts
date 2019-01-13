import { Component, OnInit } from '@angular/core';
import { StoreComponentService } from './store.component.service';
@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./app.component.css'],
})
export class StoreComponent implements OnInit {
  constructor(private _storeComponentService: StoreComponentService) { }
  data: {}
  ngOnInit() {
     this._storeComponentService.getStore().subscribe(
      data => { this.data = JSON.stringify(data)},
      err => console.error(err)
     );
  }
}
