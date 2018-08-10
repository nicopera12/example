"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-ui-listview/angular");
var angular_2 = require("nativescript-ui-calendar/angular");
var angular_3 = require("nativescript-ui-chart/angular");
var angular_4 = require("nativescript-ui-dataform/angular");
var angular_5 = require("nativescript-ui-autocomplete/angular");
var angular_6 = require("nativescript-ui-gauge/angular");
var forms_1 = require("nativescript-angular/forms");
var datospersona_routing_module_1 = require("./datospersona-routing.module");
var datospersona_component_1 = require("./datospersona.component");
var shared_module_1 = require("../shared/shared.module");
var DatosPersonaModule = /** @class */ (function () {
    function DatosPersonaModule() {
    }
    DatosPersonaModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUICalendarModule,
                angular_3.NativeScriptUIChartModule,
                angular_4.NativeScriptUIDataFormModule,
                angular_5.NativeScriptUIAutoCompleteTextViewModule,
                angular_6.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                datospersona_routing_module_1.DatosPersonaRoutingModule,
                forms_1.NativeScriptFormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                datospersona_component_1.DatosPersonaComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DatosPersonaModule);
    return DatosPersonaModule;
}());
exports.DatosPersonaModule = DatosPersonaModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NwZXJzb25hLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdG9zcGVyc29uYS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcseURBQTBFO0FBQzFFLG9EQUFxRTtBQUVyRSw2RUFBMEU7QUFDMUUsbUVBQWlFO0FBQ2pFLHlEQUF1RDtBQXNCdkQ7SUFBQTtJQUFrQyxDQUFDO0lBQXRCLGtCQUFrQjtRQXBCOUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHNDQUE0QjtnQkFDNUIsc0NBQTRCO2dCQUM1QixtQ0FBeUI7Z0JBQ3pCLHNDQUE0QjtnQkFDNUIsa0RBQXdDO2dCQUN4QyxtQ0FBeUI7Z0JBQ3pCLGlDQUF3QjtnQkFDeEIsdURBQXlCO2dCQUN6QiwrQkFBdUI7Z0JBQ3ZCLDRCQUFZO2FBQ2Y7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsOENBQXFCO2FBQ3hCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxrQkFBa0IsQ0FBSTtJQUFELHlCQUFDO0NBQUEsQUFBbkMsSUFBbUM7QUFBdEIsZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlMaXN0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktbGlzdHZpZXcvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDYWxlbmRhck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXIvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlDaGFydE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2hhcnQvYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlEYXRhRm9ybU1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm0vYW5ndWxhclwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlBdXRvQ29tcGxldGVUZXh0Vmlld01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktYXV0b2NvbXBsZXRlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWdhdWdlL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5cbmltcG9ydCB7IERhdG9zUGVyc29uYVJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9kYXRvc3BlcnNvbmEtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IERhdG9zUGVyc29uYUNvbXBvbmVudCB9IGZyb20gXCIuL2RhdG9zcGVyc29uYS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4uL3NoYXJlZC9zaGFyZWQubW9kdWxlJztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJR2F1Z2VNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgRGF0b3NQZXJzb25hUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIERhdG9zUGVyc29uYUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBEYXRvc1BlcnNvbmFNb2R1bGUgeyB9Il19