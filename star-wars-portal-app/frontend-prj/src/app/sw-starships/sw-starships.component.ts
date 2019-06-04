import { Component, OnInit } from '@angular/core';
import { swStarships } from '../objects/swStarships';
import { SWSTARSHIPS } from '../mock-objects/mock-starships';

@Component({
  selector: 'app-sw-starships',
  templateUrl: './sw-starships.component.html',
  styleUrls: ['./sw-starships.component.css']
})
export class SwStarshipsComponent implements OnInit {

  localShips = SWSTARSHIPS;
  selectedStarship : swStarships;

  constructor() { }

  ngOnInit() {
  }

  onSelect(ships: swStarships): void{
    console.log("clicked");

    this.selectedStarship = ships;
  }  

}
