import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { AppGlobal } from '../../global/app.global';

import * as platformModule from 'tns-core-modules/platform';

@Component({
    selector: "HdiActionbar",
    moduleId: module.id,
    templateUrl: "./hdi-actionbar.component.html",
    styleUrls: ["./hdi-actionbar.component.css"]
})
export class HdiActionbarComponent implements OnInit {

    /*transition*/
    public transition = 'slide';

    /*icons*/
    public icoHdi;
    public angleLeft;

    /*layout*/
    public layout = {
        'header': {
            'logo': 13,
            'ico1': 4,
            'lat': 11,
            'h': 15
        }
    };

    /*screen*/
    public screen = {
        'deviceType': platformModule.device.deviceType,
        'widthPixels': platformModule.screen.mainScreen.widthPixels,
        'heightPixels': platformModule.screen.mainScreen.heightPixels,
        'scale': platformModule.screen.mainScreen.scale
    };

    constructor(
        private _appGlobal: AppGlobal,
        page: Page,
        private _routerExtensions: RouterExtensions
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        //orientation
        const phoneW = (this.screen.widthPixels < this.screen.heightPixels ? this.screen.widthPixels : this.screen.heightPixels);
        const phoneH = (this.screen.heightPixels > this.screen.widthPixels ? this.screen.heightPixels : this.screen.widthPixels);

        //header
        this.layout.header.logo = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.header.logo);
        this.layout.header.ico1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.header.ico1);
        this.layout.header.lat = this._appGlobal.screenRes(phoneW, this.screen.scale, this.layout.header.lat);
        this.layout.header.h = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.header.h);

       
        //icons
        this.icoHdi = String.fromCharCode(0xe911);
        this.angleLeft = String.fromCharCode(0xe90c);
 
    }

    onButtonBack() {
        this._routerExtensions.back();
    }
}