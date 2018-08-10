import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { NativeScriptUISideDrawerModule } from "nativescript-pro-ui/sidedrawer/angular";

import { HdiDrawerItemComponent } from "./hdi-drawer-item/hdi-drawer-item.component";
import { HdiDrawerComponent } from "./hdi-drawer/hdi-drawer.component";
import { HdiActionbarComponent } from './hdi-actionbar/hdi-actionbar.component';
import { HdiTituloComponent } from './hdi-titulo/hdi-titulo.component';

{HdiTituloComponent}

@NgModule({
    imports: [
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule
    ],
    declarations: [
        HdiDrawerComponent,
        HdiDrawerItemComponent,
        HdiActionbarComponent,
        HdiTituloComponent
    ],
    exports: [
        HdiDrawerComponent,
        HdiActionbarComponent,
        NativeScriptUISideDrawerModule,
        HdiTituloComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SharedModule { }