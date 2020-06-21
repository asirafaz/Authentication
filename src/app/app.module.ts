import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TakeAwayComponent } from './take-away/take-away.component';
import { OutsideDeliveryComponent } from './outside-delivery/outside-delivery.component';
import { OrderingComponent } from './ordering/ordering.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AuthService } from 'src/app/auth.service';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TakeAwayComponent,
    OutsideDeliveryComponent,
    OrderingComponent,
    BsNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    RouterModule.forRoot([
      {path:'ordering', component: OrderingComponent},
      {path:'takeaway', component: TakeAwayComponent},
      {path:'outside-delivery', component: OutsideDeliveryComponent},
      {path:'bs-navbar', component:BsNavbarComponent},
      {path:'sign-in', component:LoginComponent}
        ])
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
