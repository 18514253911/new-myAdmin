import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'my-home',
  templateUrl:'./app/home/home.html',
  styleUrls:['./app/home/home.css']
})
export class HomeComponent  implements OnInit{
    ngOnInit(){
        ((<any>window).gettool())();
    }
}