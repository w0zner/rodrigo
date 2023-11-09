import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/body/body.component';

const routes: Routes = [
  {path: 'home', component: BodyComponent},
  /*{path: 'about', component: AboutComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: 'search/:palabra', component: BusquedaComponent},*/
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
