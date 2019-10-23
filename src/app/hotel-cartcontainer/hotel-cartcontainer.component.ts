import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hotel-cartcontainer',
  templateUrl: './hotel-cartcontainer.component.html',
  styleUrls: ['./hotel-cartcontainer.component.scss']
})
export class HotelCartcontainerComponent implements OnInit {

  @Input() numberOfHotels:number=123;

  constructor() { }

  ngOnInit() {
  }

}
