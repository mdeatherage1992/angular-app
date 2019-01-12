import { Component, OnInit } from '@angular/core';
import { AppComponentService } from './app.component.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private _appComponentService: AppComponentService) { }
  data: any; //any here is just for demo purpose; please change with the type returned by your endpoint
  ngOnInit() {
     this._appComponentService.getUsers().subscribe(
      data => { this.data = data},
      err => console.error(err)
     );
  }
}
