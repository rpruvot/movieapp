import { Component } from '@angular/core';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

interface User{
  name:string,
  email:string,
  password:string,
  firstname:string  
};

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrl: './createaccount.component.css'
})
export class CreateaccountComponent {
  private auth = getAuth();
  public user : User={
    name:"",
    email:"",
    firstname:"",
    password:""
  };
  
  constructor(private router:Router){
  }

  public createUser(){
    createUserWithEmailAndPassword(this.auth, this.user.email, this.user.password)
    .then((userCredential) => {
    const user = userCredential.user;
    this.router.navigate(['']);
  })
  .catch((error) => {
    console.log(error.message);
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
  
}
