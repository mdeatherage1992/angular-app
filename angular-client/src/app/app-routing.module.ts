import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AreaComponent } from './area.component'
import { StoreComponent } from './store.component'
import { ModelComponent } from './model.component'
const routes: Routes = [
  { path: 'areas', component: AreaComponent },
{ path: 'stores',      component: StoreComponent },
{ path: 'models',      component: ModelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
