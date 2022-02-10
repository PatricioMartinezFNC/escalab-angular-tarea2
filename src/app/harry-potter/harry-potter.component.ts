import { Component, OnInit } from '@angular/core';
import { HpService } from '../services/hp.service';

@Component({
  selector: 'app-harry-potter',
  templateUrl: './harry-potter.component.html',
  styleUrls: ['./harry-potter.component.css']
})
export class HarryPotterComponent implements OnInit {

  constructor(private hp: HpService) { }

  data: any;

  ngOnInit(): void {
    this.hp.getHp().subscribe(resp => {
        this.data = resp;
    });  
  }


}
