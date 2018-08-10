import { Component, Input, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { AppGlobal } from '../../global/app.global';

import * as platformModule from 'tns-core-modules/platform';

@Component({
    selector: "HdiTitulo",
    moduleId: module.id,
    templateUrl: "./hdi-titulo.component.html",
    styleUrls: ["./hdi-titulo.component.css"]
})
export class HdiTituloComponent implements OnInit {
    @Input() icono;
    @Input() titulo: string;
    @Input() descripcion: string;

    /*layout*/
    public layout = {
        'titPrinc': {
            't1': 3.5,
            't2': 2.5,
            'paddL': 4,
            'ico1': 8,
            'h': 12
        },
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
        page: Page
    ) {
        page.actionBarHidden = true;
    }
    ngOnInit(): void {
        //orientation
        const phoneW = (this.screen.widthPixels < this.screen.heightPixels ? this.screen.widthPixels : this.screen.heightPixels);
        const phoneH = (this.screen.heightPixels > this.screen.widthPixels ? this.screen.heightPixels : this.screen.widthPixels);

        //titPrinc
        this.layout.titPrinc.t1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.t1);
        this.layout.titPrinc.t2 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.t2);
        this.layout.titPrinc.paddL = this._appGlobal.screenRes(phoneW, this.screen.scale, this.layout.titPrinc.paddL);
        this.layout.titPrinc.ico1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.ico1);
        this.layout.titPrinc.h = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.h);
    }
}