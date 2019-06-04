import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SwCharactersComponent } from './sw-characters/sw-characters.component';
import { SwStarshipsComponent } from './sw-starships/sw-starships.component';
import { SwStarshipsDetailsComponent } from './sw-starships-details/sw-starships-details.component';
import { SwCharactersDetailsComponent } from './sw-characters-details/sw-characters-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { HttpClientModule }    from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SwCharactersComponent,
    SwStarshipsComponent,
    SwStarshipsDetailsComponent,
    SwCharactersDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
