import { Component, OnInit } from '@angular/core';
import { swCharacters } from '../objects/swCharacters';
import { SWCHARACTERS } from '../mock-objects/mock-characters';
import {SwCharactersService} from '../sw-characters.service'

@Component({
  selector: 'app-sw-characters',
  templateUrl: './sw-characters.component.html',
  styleUrls: ['./sw-characters.component.css']
})
export class SwCharactersComponent implements OnInit {

  localCharacter = SWCHARACTERS;
  //localCharacter : swCharacters[]; //migrate to subscribe - angular version mismatch, no time to fix
  selectedCharacter : swCharacters;

  //constructor(private charService: SwCharactersService) { } //migrate to subscribe - angular version mismatch, no time to fix
  constructor(){
  }

  ngOnInit() {
    //this.getCharacters(); //migrate to subscribe - angular version mismatch, no time to fix
  }

  onSelect(guys: swCharacters): void{
    console.log("clicked");

    this.selectedCharacter = guys;
  }  

  //getCharacters(): void{ //migrate to subscribe - angular version mismatch, no time to fix
  //  this.charService.getCharacters().subscribe(localCharacter => this.localCharacter = localCharacter); //migrate to subscribe - angular version mismatch, no time to fix
  //} //migrate to subscribe - angular version mismatch, no time to fix
}
