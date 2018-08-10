import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { AppGlobal } from '../global/app.global';
import { Switch } from "ui/switch";

import * as platformModule from 'tns-core-modules/platform';

@Component({
    selector: "DatosPersona",
    moduleId: module.id,
    templateUrl: "./datospersona.component.html",
    styleUrls: ['./datospersona.component.css'],
    providers: [AppGlobal]
})
export class DatosPersonaComponent implements OnInit {
    textFieldValue: string = "";

    public firstSwitchState = "NO ACEPTADO";

    public onFirstChecked(args) {
        let firstSwitch = <Switch>args.object;
        if (firstSwitch.checked) {
            this.firstSwitchState = "ACEPTADO";
        } else {
            this.firstSwitchState = "NO ACEPTADO";
        }
    }

    /*transition*/
    public transition = 'slide';
    
    /*icons*/
    public icoSSN;
    public icoInsp;
    public icoEye;

    /*screen*/
    public screen = {
        'deviceType': platformModule.device.deviceType,
        'widthPixels': platformModule.screen.mainScreen.widthPixels,
        'heightPixels': platformModule.screen.mainScreen.heightPixels,
        'scale': platformModule.screen.mainScreen.scale
    };

    /*layout*/
    public layout = {
        'form': {
            'label': 1.8,
            't1': 3,
            't2': 2.5,
            'ico1': 5,
            'inputPdB': 2,
            'inputPdT': 2,
            'paddT': 6
        },
        'footer': {
            'ssn': 10,
            'paddB': 1
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
        const phoneH = (this.screen.heightPixels > this.screen.widthPixels ? this.screen.heightPixels : this.screen.widthPixels);

        //form
        this.layout.form.label = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.label);
        this.layout.form.t1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.t1);
        this.layout.form.t2 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.t2);
        this.layout.form.ico1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.ico1);
        this.layout.form.inputPdB = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.inputPdB);
        this.layout.form.inputPdT = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.inputPdT);
        this.layout.form.paddT = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.form.paddT);


        //Footer
        this.layout.footer.ssn = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.footer.ssn);
        this.layout.footer.paddB = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.footer.paddB);

        //icons
        this.icoSSN = String.fromCharCode(0xe922);
        this.icoInsp = String.fromCharCode(0xe909);
        this.icoEye = String.fromCharCode(0xe9cf);

    }
}