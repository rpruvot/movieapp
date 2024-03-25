import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ConnectComponent } from './connect/connect.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { FormsModule } from '@angular/forms';
import { DisconnectComponent } from './disconnect/disconnect.component';

//note : redemarrez le compiler 

@NgModule({
  declarations: [
    AppComponent,
    AcceuilComponent,
    ConnectComponent,
    CreateaccountComponent,
    DisconnectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    provideFirebaseApp(() => initializeApp({"projectId":"projetweb-92fe6","appId":"1:159905600169:web:20999195191238cdf0cfb8","storageBucket":"projetweb-92fe6.appspot.com","apiKey":"AIzaSyCG3KnX4M1bAaReghJLzlvagm57dSW6Gas","authDomain":"projetweb-92fe6.firebaseapp.com","messagingSenderId":"159905600169"})),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideDatabase(() => getDatabase()),
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    MatIconModule    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
