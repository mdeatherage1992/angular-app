import { Component, OnInit } from '@angular/core';
import { AreaComponentService } from './area.component.service';
@Component({
  selector: 'area',
  templateUrl: './area.component.html',
  styleUrls: ['./app.component.css'],
})
export class AreaComponent implements OnInit {
  constructor(private _areaComponentService: AreaComponentService) { }
  data: {}
  ngOnInit() {
     this._areaComponentService.getArea().subscribe(
      data => { this.data = JSON.stringify(data)},
      err => console.error(err)
     );
  }
}
