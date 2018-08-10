import { Component, OnInit } from "@angular/core";
import { Page } from "ui/page";
import { AppGlobal } from '../global/app.global';

import { ActivatedRoute } from "@angular/router";

import * as platformModule from 'tns-core-modules/platform';

@Component({
    selector: "Wizard",
    moduleId: module.id,
    templateUrl: "./wizard.component.html",
    styleUrls: ['./wizard.component.css'],
    providers: [AppGlobal]
})
export class WizardComponent implements OnInit {
    public id: number;

    /*transition*/
    public transition = 'slide';

    constructor(
        private _appGlobal: AppGlobal,
        private _route: ActivatedRoute,
        page: Page
    ) {
        this._route.params.forEach((params) => { this.id = +params["id"]; });
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
       console.log("PARAM ---> " + this.id);
    }
}