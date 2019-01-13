import { Component, OnInit } from '@angular/core';
import { ModelComponentService } from './model.component.service';
@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./app.component.css'],
})
export class ModelComponent implements OnInit {
  constructor(private _modelComponentService: ModelComponentService) { }
  data: {}
  ngOnInit() {
     this._modelComponentService.getModel().subscribe(
      data => { this.data = JSON.stringify(data)},
      err => console.error(err)
     );
  }
}
