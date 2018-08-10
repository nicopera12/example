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
var datosauto_routing_module_1 = require("./datosauto-routing.module");
var datosauto_component_1 = require("./datosauto.component");
var shared_module_1 = require("../shared/shared.module");
var DatosAutoModule = /** @class */ (function () {
    function DatosAutoModule() {
    }
    DatosAutoModule = __decorate([
        core_1.NgModule({
            imports: [
                angular_1.NativeScriptUIListViewModule,
                angular_2.NativeScriptUICalendarModule,
                angular_3.NativeScriptUIChartModule,
                angular_4.NativeScriptUIDataFormModule,
                angular_5.NativeScriptUIAutoCompleteTextViewModule,
                angular_6.NativeScriptUIGaugeModule,
                common_1.NativeScriptCommonModule,
                datosauto_routing_module_1.DatosAutoRoutingModule,
                forms_1.NativeScriptFormsModule,
                shared_module_1.SharedModule
            ],
            declarations: [
                datosauto_component_1.DatosAutoComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], DatosAutoModule);
    return DatosAutoModule;
}());
exports.DatosAutoModule = DatosAutoModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0b3NhdXRvLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRhdG9zYXV0by5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLDREQUFnRjtBQUNoRiw0REFBZ0Y7QUFDaEYseURBQTBFO0FBQzFFLDREQUFnRjtBQUNoRixnRUFBZ0c7QUFDaEcseURBQTBFO0FBQzFFLG9EQUFxRTtBQUVyRSx1RUFBb0U7QUFDcEUsNkRBQTJEO0FBQzNELHlEQUF1RDtBQXNCdkQ7SUFBQTtJQUErQixDQUFDO0lBQW5CLGVBQWU7UUFwQjNCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxzQ0FBNEI7Z0JBQzVCLHNDQUE0QjtnQkFDNUIsbUNBQXlCO2dCQUN6QixzQ0FBNEI7Z0JBQzVCLGtEQUF3QztnQkFDeEMsbUNBQXlCO2dCQUN6QixpQ0FBd0I7Z0JBQ3hCLGlEQUFzQjtnQkFDdEIsK0JBQXVCO2dCQUN2Qiw0QkFBWTthQUNmO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHdDQUFrQjthQUNyQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csZUFBZSxDQUFJO0lBQUQsc0JBQUM7Q0FBQSxBQUFoQyxJQUFnQztBQUFuQiwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJTGlzdFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2FsZW5kYXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNhbGVuZGFyL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQ2hhcnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWNoYXJ0L2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJRGF0YUZvcm1Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJQXV0b0NvbXBsZXRlVGV4dFZpZXdNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWF1dG9jb21wbGV0ZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1nYXVnZS9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG5pbXBvcnQgeyBEYXRvc0F1dG9Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vZGF0b3NhdXRvLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBEYXRvc0F1dG9Db21wb25lbnQgfSBmcm9tIFwiLi9kYXRvc2F1dG8uY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICcuLi9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNhbGVuZGFyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUNoYXJ0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSURhdGFGb3JtTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUF1dG9Db21wbGV0ZVRleHRWaWV3TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUdhdWdlTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIERhdG9zQXV0b1JvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBTaGFyZWRNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBEYXRvc0F1dG9Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgRGF0b3NBdXRvTW9kdWxlIHsgfSJdfQ==