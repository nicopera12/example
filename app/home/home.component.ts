import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { AppGlobal } from '../global/app.global';

import * as platformModule from 'tns-core-modules/platform';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css'],
    providers: [AppGlobal]
})
export class HomeComponent implements OnInit {

    /*transition*/
    public transition = 'slide';

    /*icons*/
    public icoHdi;
    public icoSSN;
    public angleDown;
    public icoPhoto;
    public icoCheck;

    /*screen*/
    public screen = {
        'deviceType': platformModule.device.deviceType,
        'widthPixels': platformModule.screen.mainScreen.widthPixels,
        'heightPixels': platformModule.screen.mainScreen.heightPixels,
        'scale': platformModule.screen.mainScreen.scale
    };

    /*layout*/
    public layout = {
        'titPrinc': {
            'logo': 15,
            'sep': 10,
            't1': 3
        },
        'buttLogin': {
            'icon1': 4.5,
            'icon2': 2.2,
            'sep': 8,
            't1': 2.2,
            't2': 1.8,
            'h': 17,
            'm': 0.7,
            'paddT': 2.5
        },
        'footer': {
            'ssn': 10,
            'paddB': 2
        }
    };

    constructor(
        private _appGlobal: AppGlobal,
        page: Page
    ) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        //orientation
        const phoneW = (this.screen.widthPixels < this.screen.heightPixels ? this.screen.widthPixels : this.screen.heightPixels);
        const phoneH = (this.screen.heightPixels > this.screen.widthPixels ? this.screen.heightPixels : this.screen.widthPixels);

        //Header
        this.layout.titPrinc.logo = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.logo);
        this.layout.titPrinc.t1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.t1);

        //ButtLogin
        this.layout.buttLogin.icon1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.buttLogin.icon1);
        this.layout.buttLogin.icon2 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.buttLogin.icon2);
        this.layout.buttLogin.t1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.buttLogin.t1);
        this.layout.buttLogin.t2 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.buttLogin.t2);
        this.layout.buttLogin.h = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.buttLogin.h);
        this.layout.buttLogin.m = this._appGlobal.screenRes(phoneW, this.screen.scale, this.layout.buttLogin.m);
        this.layout.buttLogin.paddT = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.buttLogin.paddT);

        //Footer
        this.layout.footer.ssn = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.footer.ssn);
        this.layout.footer.paddB = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.footer.paddB);

        //icons
        this.icoHdi = String.fromCharCode(0xe911);
        this.icoSSN = String.fromCharCode(0xe922);
        this.angleDown = String.fromCharCode(0xe90b);
        this.icoPhoto = String.fromCharCode(0xe900);
        this.icoCheck = String.fromCharCode(0xea11);

    }
}