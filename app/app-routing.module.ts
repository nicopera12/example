import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "./home/home.module#HomeModule" },
    { path: "datospersona",loadChildren: "./datospersona/datospersona.module#DatosPersonaModule" },
    { path: "datosauto",loadChildren: "./datosauto/datosauto.module#DatosAutoModule" },
    { path: "wizard/:id",loadChildren: "./wizard/wizard.module#WizardModule" },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
