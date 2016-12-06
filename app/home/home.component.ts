import { Component,OnInit } from '@angular/core';
import {Digit} from './digit';
export class  ball{
        x:number;
        y:number;
        g:number;
        vx:number;
        vy:number;
        color:string;
    }
@Component({
  moduleId: module.id,
  selector: 'my-home',
  templateUrl:'./home.html',
  styleUrls:['./home.css'],
  providers:[Digit]
})
export class HomeComponent  implements OnInit{
    constructor(private digit:Digit){};
    endTime:Date = new Date();
    MARGIN_LEFT = 30;
    MARGIN_TOP = 60;
    RADIUS = 8;
    curShowTimeSeconds = 0;
   
    balls:ball[] = [];
    colors:string[] = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF444", "#CC000C"];

    ngOnInit(){
        this.endTime.setTime(this.endTime.getTime() + 3600 * 1000);
        this.initCanvas();
    }
   
    initCanvas(){
        var curShowTimeSeconds:number;
        var canvas = document.getElementById("canvas") as HTMLCanvasElement;
        var context = canvas.getContext("2d");
        canvas.height = 700;
        canvas.width = 1400;
        curShowTimeSeconds=this.getCurShowTimeSeconds();
        setInterval(function() {
            this.render(context);
            this.update();
        }, 50);
    }
    getCurShowTimeSeconds():number{
        var curTime:Date = new Date();
        var ret =this.endTime.getTime() - curTime.getTime();
        ret = Math.round(ret / 1000);
        return ret >= 0 ? ret : 0;
    }
    render(cxt:CanvasRenderingContext2D){

    }
    update(){

    }
}