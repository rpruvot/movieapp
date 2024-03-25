import { Component, inject} from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

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

  public connection(){
    console.log("tentative de connexion");
    signInWithEmailAndPassword(this.auth, this.user.email, this.user.password)
    .then((userCredential) => {
      console.log("connection correct")
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log("connection incorrect")
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }
}


