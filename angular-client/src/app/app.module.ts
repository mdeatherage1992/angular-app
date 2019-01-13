import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppComponentService } from './app.component.service'
import { AreaComponent } from './area.component'
import { StoreComponent } from './store.component'
import { ModelComponent } from './model.component'
import { AreaComponentService } from './area.component.service'
import { StoreComponentService } from './store.component.service'
import { ModelComponentService } from './model.component.service'
@NgModule({
  declarations: [
    AppComponent,
    AreaComponent,
    StoreComponent,
    ModelComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [AppComponentService,AreaComponentService,ModelComponentService,StoreComponentService],
  bootstrap: [AppComponent,AreaComponent,StoreComponent,ModelComponent]
})
export class AppModule { }
