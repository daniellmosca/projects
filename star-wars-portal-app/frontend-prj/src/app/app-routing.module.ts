import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SwCharactersComponent } from './sw-characters/sw-characters.component';
import { SwStarshipsComponent } from './sw-starships/sw-starships.component';
import { SwCharactersDetailsComponent } from './sw-characters-details/sw-characters-details.component';
import { SwStarshipsDetailsComponent } from './sw-starships-details/sw-starships-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'character/:id', component: SwCharactersDetailsComponent },
  {
    path: 'characters',
    component: SwCharactersComponent,
    data: { title: 'SW Characters List' }
  },
  {
    path: 'starships',
    component: SwStarshipsComponent,
    data: { title: 'SW Starships List' }
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { 

}
