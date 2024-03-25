import { Component } from '@angular/core';
import { getAuth, signOut } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})



export class AppComponent { 
  title = 'movieapp';
  public connect_state : boolean = true;

  getStatus(){
   const auth = getAuth();
   if(auth.currentUser){
    this.connect_state = true;
   }else{
    this.connect_state = false
   }
  }
  disconnect(){
    const auth = getAuth();
    console.log("Déconnection")
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  } 
}
