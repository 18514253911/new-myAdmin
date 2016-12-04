import {Component, Input, Output} from '@angular/core';

@Component({
    selector:'ba-menu-item',
    templateUrl:'./app/left/baMenu/baMenuItem/bamenuitem.html',
    styleUrls:['./app/left/baMenu/baMenuItem/bamenuitem.css']
})
export class BaMenuItem {
    @Input() menuItem:any;
}