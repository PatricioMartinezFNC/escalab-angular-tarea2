import { Component, OnInit } from '@angular/core';
import { GotService } from '../services/got.service';

@Component({
  selector: 'app-game-of-throne',
  templateUrl: './game-of-throne.component.html',
  styleUrls: ['./game-of-throne.component.css']
})
export class GameOfThroneComponent implements OnInit {

  constructor(private got: GotService) { }

  data: any;

  ngOnInit(): void {
    this.got.getGot().subscribe(resp => {
        this.data = resp;
    });  
  }

}
