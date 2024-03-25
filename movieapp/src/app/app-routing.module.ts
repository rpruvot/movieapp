import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnectComponent } from './connect/connect.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

const routes: Routes = [
  {path:'connect', component: ConnectComponent},
  {path:'createaccount', component: CreateaccountComponent},
  {path:'', component: AcceuilComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppRoutingModule { }
