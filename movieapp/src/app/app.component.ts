import { Component } from '@angular/core';
import { getAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent { 
  title = 'movieapp';
  public connect_state : boolean = false;
  public updateConnectState(state:boolean){
    this.connect_state = state;
  } 
}
