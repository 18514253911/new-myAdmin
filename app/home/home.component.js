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
        this.balls = [];
        this.colors = ["#33B5E5", "#0099CC", "#AA66CC", "#9933CC", "#99CC00", "#669900", "#FFBB33", "#FF8800", "#FF444", "#CC000C"];
    }
    ;
    HomeComponent.prototype.ngOnInit = function () {
        this.endTime.setTime(this.endTime.getTime() + 3600 * 1000);
        this.initCanvas();
    };
    HomeComponent.prototype.initCanvas = function () {
        var curShowTimeSeconds;
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.height = 700;
        canvas.width = 1400;
        curShowTimeSeconds = this.getCurShowTimeSeconds();
        setInterval(function () {
            this.render(context);
            this.update();
        }, 50);
    };
    HomeComponent.prototype.getCurShowTimeSeconds = function () {
        var curTime = new Date();
        var ret = this.endTime.getTime() - curTime.getTime();
        ret = Math.round(ret / 1000);
        return ret >= 0 ? ret : 0;
    };
    HomeComponent.prototype.render = function (cxt) {
    };
    HomeComponent.prototype.update = function () {
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