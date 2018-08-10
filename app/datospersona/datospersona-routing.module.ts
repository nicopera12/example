import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DatosPersonaComponent } from "./datospersona.component";

const routes: Routes = [
    { path: "", component: DatosPersonaComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DatosPersonaRoutingModule { }