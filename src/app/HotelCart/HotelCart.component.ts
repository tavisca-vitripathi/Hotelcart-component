import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-HotelCart',
  templateUrl: './HotelCart.component.html',
  styleUrls: ['./HotelCart.component.scss']
})
export class HotelCartComponent implements OnInit {
  @Input() imageUrl: string = 'https://images.wallpaperscraft.com/image/room_style_hotel_bed_70002_1920x1080.jpg';
  @Input() header:string="Hotel Vistara";
  @Input() rating:number=4;
  @Input() discription:string="swimming parking playground cab"
  constructor() { }

  ngOnInit() {
  }

}
