import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _appComponentService: AppComponentService) { }
  data: {}
  ngOnInit() {
     this._appComponentService.getData().subscribe(
      data => { this.data = JSON.stringify(data) },
      err => console.error(err)
     );
  }
}
