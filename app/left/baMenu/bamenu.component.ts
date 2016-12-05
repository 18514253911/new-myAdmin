import {Component, Input, Output} from '@angular/core';

@Component({
    selector:'ba-menu',
    templateUrl:"./app/left/baMenu/bamenu.html",
    styleUrls:["./app/left/baMenu/bamenu.css"]
})
export class BaMenu {
    menuItems=[{
        id:"home",
        name:"canvas倒计时",
        // children:[{
        //     id:2,
        //     name:"wqw2"
        // }]
    },{
        id:"game",
        name:"游戏"
    },
    ]
}