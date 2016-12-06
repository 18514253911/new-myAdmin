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
    WINDOW_WIDTH=1400;
    WINDOW_HEIGHT=700;
    balls:ball[] = [];
    colors:string[] = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF444", "#CC000C"];

    ngOnInit(){
        this.endTime.setTime(this.endTime.getTime() + 3600 * 1000);
        this.WINDOW_HEIGHT=window.innerHeight-60;
        this.WINDOW_WIDTH=window.innerWidth-180;
        this.initCanvas();
    }
   
    initCanvas(){
        var canvas = document.getElementById("canvas") as HTMLCanvasElement;
        var context = canvas.getContext("2d");
        canvas.height = this.WINDOW_HEIGHT;
        canvas.width = this.WINDOW_WIDTH;
        this.curShowTimeSeconds=this.getCurShowTimeSeconds();
        setInterval((function() {
            this.render(context);
            this.update();
        }).bind(this), 50);
    }
    getCurShowTimeSeconds():number{
        var curTime:Date = new Date();
        var ret =this.endTime.getTime() - curTime.getTime();
        ret = Math.round(ret / 1000);
        return ret >= 0 ? ret : 0;
    }
    render(cxt:CanvasRenderingContext2D){
        cxt.clearRect(0,0,this.WINDOW_WIDTH,this.WINDOW_HEIGHT);
        var hours=parseInt((this.curShowTimeSeconds / 3600).toString());
        var minutes=parseInt(((this.curShowTimeSeconds - hours * 3600) / 60).toString());
        var seconds=parseInt((this.curShowTimeSeconds % 60).toString());
        //时
        this.renderDigit(this.MARGIN_LEFT, this.MARGIN_TOP, parseInt((hours / 10).toString()), cxt);
        this.renderDigit(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP,parseInt((hours % 10).toString()) , cxt);
        this.renderDigit(this.MARGIN_LEFT + 30 * (this.RADIUS + 1), this.MARGIN_TOP, 10, cxt);
        //分
        this.renderDigit(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP,parseInt(( minutes / 10).toString()), cxt);
        this.renderDigit(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP,parseInt((minutes % 10).toString()) , cxt);
        this.renderDigit(this.MARGIN_LEFT + 69 * (this.RADIUS + 1), this.MARGIN_TOP, 10, cxt);
        //秒
        this.renderDigit(this.MARGIN_LEFT + 78 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((seconds / 10).toString()), cxt);
        this.renderDigit(this.MARGIN_LEFT + 93 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((seconds % 10).toString()), cxt);

        for (var i = 0; i < this.balls.length; i++) {
            cxt.fillStyle = this.balls[i].color;
            cxt.beginPath();
            cxt.arc(this.balls[i].x, this.balls[i].y, this.RADIUS, 0, 2 * Math.PI, true);
            cxt.closePath();
            cxt.fill();
        }
    }
    renderDigit(x:number, y:number, num:number, cxt:CanvasRenderingContext2D) {
         cxt.fillStyle = "rgb(0,102,153)";
         for(var i=0;i<this.digit.digit[num].length;i++){
              for (var j = 0; j < this.digit.digit[num][i].length; j++) {
                   if (this.digit.digit[num][i][j] === 1) {
                       cxt.beginPath();
                       cxt.arc(x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), this.RADIUS, 0, 2 * Math.PI);
                       cxt.closePath();
                       cxt.fill();
                   }
              }
         }
    }
    update(){
        var nextShowTimeSeconds = this.getCurShowTimeSeconds();
        var nextHours = parseInt((nextShowTimeSeconds / 3600).toString());
        var nextMinutes =parseInt(((nextShowTimeSeconds - nextHours * 3600) / 60).toString()) ;
        var nextSeconds = parseInt((nextShowTimeSeconds % 60).toString());

        var curHours = parseInt((this.curShowTimeSeconds / 3600).toString());
        var curMinutes = parseInt(((this.curShowTimeSeconds - curHours * 3600) / 60).toString());
        var curSeconds =parseInt((this.curShowTimeSeconds % 60).toString()) ;

        if (nextSeconds !== curSeconds) {
            //绘制彩色小球
            if (parseInt((curHours / 10).toString()) !=parseInt((nextHours / 10).toString()) ) {
                this.addBalls(this.MARGIN_LEFT + 0, this.MARGIN_TOP,parseInt((nextHours / 10).toString()) );
            }
            if (parseInt((curHours % 10).toString()) !=parseInt((nextHours % 10).toString()) ) {
                this.addBalls(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP,parseInt((nextHours % 10).toString()) );
            }

            if (parseInt((curMinutes / 10).toString()) !=parseInt((nextMinutes / 10).toString()) ) {
                this.addBalls(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP,parseInt((nextMinutes / 10).toString()) );
            }
            if (parseInt((curMinutes % 10).toString()) != parseInt((nextMinutes % 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextMinutes % 10).toString()) );
            }

            if (parseInt((curSeconds / 10).toString()) !=parseInt((nextSeconds / 10).toString()) ) {
                this.addBalls(this.MARGIN_LEFT + 78 * (this.RADIUS + 1), this.MARGIN_TOP,parseInt((nextSeconds / 10).toString()) );
            }
            if (parseInt((curSeconds % 10).toString()) != parseInt((nextSeconds % 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 93 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextSeconds % 10).toString()));
            }
            this.curShowTimeSeconds = nextShowTimeSeconds;
        }
        this.uodateBalls();
    }
    uodateBalls() {
        for (var i = 0; i < this.balls.length; i++) {
            this.balls[i].x += this.balls[i].vx;
            this.balls[i].y += this.balls[i].vy;
            this.balls[i].vy += this.balls[i].g;
            if (this.balls[i].y >= this.WINDOW_HEIGHT - this.RADIUS) {
                this.balls[i].y = this.WINDOW_HEIGHT - this.RADIUS;
                this.balls[i].vy = -this.balls[i].vy * 0.75;
            }
        }
        var cnt = 0;
        for (var i = 0; i < this.balls.length; i++) {
            if (this.balls[i].x + this.RADIUS > 0 && this.balls[i].x - this.RADIUS <this.WINDOW_WIDTH) {
                this.balls[cnt++] = this.balls[i];
            }
        }

        while (this.balls.length > cnt) {
            this.balls.pop(); //删除数组末尾的值
        }
    }
    addBalls(x:number, y:number, num:number) {
        for (var i = 0; i < this.digit.digit[num].length; i++) {
            for (var j = 0; j < this.digit.digit[num][i].length; j++) {
                if (this.digit.digit[num][i][j] == 1) {
                    var aBall = {
                        x: x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1),
                        y: y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1),
                        g: 1.5 + Math.random(),
                        vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4, //x的速度
                        vy: -5,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    };
                    this.balls.push(aBall);
                }
            }
        }
    }
}