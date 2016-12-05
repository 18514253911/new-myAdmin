import { Component,OnInit } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl:'./home.html',
  styleUrls:['./home.css']
})
export class HomeComponent  implements OnInit{
    ngOnInit(){
        ((<any>window).gettool())();
    }
}