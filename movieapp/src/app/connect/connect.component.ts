import { Component, inject } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';

interface User{
  name:string,
  email:string,
  password:string,
  firstname:string  
};

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrl: './connect.component.css'
})

export class ConnectComponent {
  private auth: Auth = inject(Auth);
  public user : User={
    name:"",
    email:"",
    firstname:"",
    password:""
  };


  constructor(private router: Router) {}

  public connection(){
    console.log("tentative de connexion");
    signInWithEmailAndPassword(this.auth, this.user.email, this.user.password)
    .then((userCredential) => {
      console.log("connection correct")
    const user = userCredential.user;
    //updateConnectState(true);
    this.router.navigate(['']);
  })
  .catch((error) => {
    console.log("connection incorrect")
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
}


