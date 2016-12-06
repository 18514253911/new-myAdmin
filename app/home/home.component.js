"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var digit_1 = require('./digit');
var ball = (function () {
    function ball() {
    }
    return ball;
}());
exports.ball = ball;
var HomeComponent = (function () {
    function HomeComponent(digit) {
        this.digit = digit;
        this.endTime = new Date();
        this.MARGIN_LEFT = 30;
        this.MARGIN_TOP = 60;
        this.RADIUS = 8;
        this.curShowTimeSeconds = 0;
        this.WINDOW_WIDTH = 1400;
        this.WINDOW_HEIGHT = 700;
        this.balls = [];
        this.colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF444", "#CC000C"];
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        this.endTime.setTime(this.endTime.getTime() + 3600 * 1000);
        this.WINDOW_HEIGHT = window.innerHeight - 60;
        this.WINDOW_WIDTH = window.innerWidth - 180;
        this.initCanvas();
    };
    HomeComponent.prototype.initCanvas = function () {
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.height = this.WINDOW_HEIGHT;
        canvas.width = this.WINDOW_WIDTH;
        this.curShowTimeSeconds = this.getCurShowTimeSeconds();
        setInterval((function () {
            this.render(context);
            this.update();
        }).bind(this), 50);
    };
    HomeComponent.prototype.getCurShowTimeSeconds = function () {
        var curTime = new Date();
        var ret = this.endTime.getTime() - curTime.getTime();
        ret = Math.round(ret / 1000);
        return ret >= 0 ? ret : 0;
    };
    HomeComponent.prototype.render = function (cxt) {
        cxt.clearRect(0, 0, this.WINDOW_WIDTH, this.WINDOW_HEIGHT);
        var hours = parseInt((this.curShowTimeSeconds / 3600).toString());
        var minutes = parseInt(((this.curShowTimeSeconds - hours * 3600) / 60).toString());
        var seconds = parseInt((this.curShowTimeSeconds % 60).toString());
        //时
        this.renderDigit(this.MARGIN_LEFT, this.MARGIN_TOP, parseInt((hours / 10).toString()), cxt);
        this.renderDigit(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((hours % 10).toString()), cxt);
        this.renderDigit(this.MARGIN_LEFT + 30 * (this.RADIUS + 1), this.MARGIN_TOP, 10, cxt);
        //分
        this.renderDigit(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((minutes / 10).toString()), cxt);
        this.renderDigit(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((minutes % 10).toString()), cxt);
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
    };
    HomeComponent.prototype.renderDigit = function (x, y, num, cxt) {
        cxt.fillStyle = "rgb(0,102,153)";
        for (var i = 0; i < this.digit.digit[num].length; i++) {
            for (var j = 0; j < this.digit.digit[num][i].length; j++) {
                if (this.digit.digit[num][i][j] === 1) {
                    cxt.beginPath();
                    cxt.arc(x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1), this.RADIUS, 0, 2 * Math.PI);
                    cxt.closePath();
                    cxt.fill();
                }
            }
        }
    };
    HomeComponent.prototype.update = function () {
        var nextShowTimeSeconds = this.getCurShowTimeSeconds();
        var nextHours = parseInt((nextShowTimeSeconds / 3600).toString());
        var nextMinutes = parseInt(((nextShowTimeSeconds - nextHours * 3600) / 60).toString());
        var nextSeconds = parseInt((nextShowTimeSeconds % 60).toString());
        var curHours = parseInt((this.curShowTimeSeconds / 3600).toString());
        var curMinutes = parseInt(((this.curShowTimeSeconds - curHours * 3600) / 60).toString());
        var curSeconds = parseInt((this.curShowTimeSeconds % 60).toString());
        if (nextSeconds !== curSeconds) {
            //绘制彩色小球
            if (parseInt((curHours / 10).toString()) != parseInt((nextHours / 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 0, this.MARGIN_TOP, parseInt((nextHours / 10).toString()));
            }
            if (parseInt((curHours % 10).toString()) != parseInt((nextHours % 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 15 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextHours % 10).toString()));
            }
            if (parseInt((curMinutes / 10).toString()) != parseInt((nextMinutes / 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 39 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextMinutes / 10).toString()));
            }
            if (parseInt((curMinutes % 10).toString()) != parseInt((nextMinutes % 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 54 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextMinutes % 10).toString()));
            }
            if (parseInt((curSeconds / 10).toString()) != parseInt((nextSeconds / 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 78 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextSeconds / 10).toString()));
            }
            if (parseInt((curSeconds % 10).toString()) != parseInt((nextSeconds % 10).toString())) {
                this.addBalls(this.MARGIN_LEFT + 93 * (this.RADIUS + 1), this.MARGIN_TOP, parseInt((nextSeconds % 10).toString()));
            }
            this.curShowTimeSeconds = nextShowTimeSeconds;
        }
        this.uodateBalls();
    };
    HomeComponent.prototype.uodateBalls = function () {
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
            if (this.balls[i].x + this.RADIUS > 0 && this.balls[i].x - this.RADIUS < this.WINDOW_WIDTH) {
                this.balls[cnt++] = this.balls[i];
            }
        }
        while (this.balls.length > cnt) {
            this.balls.pop(); //删除数组末尾的值
        }
    };
    HomeComponent.prototype.addBalls = function (x, y, num) {
        for (var i = 0; i < this.digit.digit[num].length; i++) {
            for (var j = 0; j < this.digit.digit[num][i].length; j++) {
                if (this.digit.digit[num][i][j] == 1) {
                    var aBall = {
                        x: x + j * 2 * (this.RADIUS + 1) + (this.RADIUS + 1),
                        y: y + i * 2 * (this.RADIUS + 1) + (this.RADIUS + 1),
                        g: 1.5 + Math.random(),
                        vx: Math.pow(-1, Math.ceil(Math.random() * 1000)) * 4,
                        vy: -5,
                        color: this.colors[Math.floor(Math.random() * this.colors.length)]
                    };
                    this.balls.push(aBall);
                }
            }
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-home',
            templateUrl: './home.html',
            styleUrls: ['./home.css'],
            providers: [digit_1.Digit]
        }), 
        __metadata('design:paramtypes', [digit_1.Digit])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map