import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DatosAutoComponent } from "./datosauto.component";

const routes: Routes = [
    { path: "", component: DatosAutoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DatosAutoRoutingModule { }