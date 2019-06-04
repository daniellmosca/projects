import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { swCharacters } from './objects/swCharacters'
import { SWCHARACTERS } from './mock-objects/mock-characters'
import { Observable} from 'rxjs';
import { of } from 'rxjs/observable/of'

/*
@Injectable({
  providedIn: 'root',
})*/

export class SwCharactersService {

  constructor() { }

    getCharacters(): Observable<swCharacters[]>{
      return of(SWCHARACTERS);
    }
}
