"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var angular_1 = require("nativescript-pro-ui/sidedrawer/angular");
var hdi_drawer_item_component_1 = require("./hdi-drawer-item/hdi-drawer-item.component");
var hdi_drawer_component_1 = require("./hdi-drawer/hdi-drawer.component");
var hdi_actionbar_component_1 = require("./hdi-actionbar/hdi-actionbar.component");
var hdi_titulo_component_1 = require("./hdi-titulo/hdi-titulo.component");
{
    hdi_titulo_component_1.HdiTituloComponent;
}
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                angular_1.NativeScriptUISideDrawerModule
            ],
            declarations: [
                hdi_drawer_component_1.HdiDrawerComponent,
                hdi_drawer_item_component_1.HdiDrawerItemComponent,
                hdi_actionbar_component_1.HdiActionbarComponent,
                hdi_titulo_component_1.HdiTituloComponent
            ],
            exports: [
                hdi_drawer_component_1.HdiDrawerComponent,
                hdi_actionbar_component_1.HdiActionbarComponent,
                angular_1.NativeScriptUISideDrawerModule,
                hdi_titulo_component_1.HdiTituloComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBQ3ZFLGtFQUF3RjtBQUV4Rix5RkFBcUY7QUFDckYsMEVBQXVFO0FBQ3ZFLG1GQUFnRjtBQUNoRiwwRUFBdUU7QUFFdkUsQ0FBQztJQUFBLHlDQUFrQixDQUFBO0FBQUEsQ0FBQztBQXVCcEI7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFyQnhCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLHdDQUE4QjthQUNqQztZQUNELFlBQVksRUFBRTtnQkFDVix5Q0FBa0I7Z0JBQ2xCLGtEQUFzQjtnQkFDdEIsK0NBQXFCO2dCQUNyQix5Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wseUNBQWtCO2dCQUNsQiwrQ0FBcUI7Z0JBQ3JCLHdDQUE4QjtnQkFDOUIseUNBQWtCO2FBQ3JCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1wcm8tdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IEhkaURyYXdlckl0ZW1Db21wb25lbnQgfSBmcm9tIFwiLi9oZGktZHJhd2VyLWl0ZW0vaGRpLWRyYXdlci1pdGVtLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGRpRHJhd2VyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGRpLWRyYXdlci9oZGktZHJhd2VyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGRpQWN0aW9uYmFyQ29tcG9uZW50IH0gZnJvbSAnLi9oZGktYWN0aW9uYmFyL2hkaS1hY3Rpb25iYXIuY29tcG9uZW50JztcbmltcG9ydCB7IEhkaVRpdHVsb0NvbXBvbmVudCB9IGZyb20gJy4vaGRpLXRpdHVsby9oZGktdGl0dWxvLmNvbXBvbmVudCc7XG5cbntIZGlUaXR1bG9Db21wb25lbnR9XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZVxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEhkaURyYXdlckNvbXBvbmVudCxcbiAgICAgICAgSGRpRHJhd2VySXRlbUNvbXBvbmVudCxcbiAgICAgICAgSGRpQWN0aW9uYmFyQ29tcG9uZW50LFxuICAgICAgICBIZGlUaXR1bG9Db21wb25lbnRcbiAgICBdLFxuICAgIGV4cG9ydHM6IFtcbiAgICAgICAgSGRpRHJhd2VyQ29tcG9uZW50LFxuICAgICAgICBIZGlBY3Rpb25iYXJDb21wb25lbnQsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICAgICAgSGRpVGl0dWxvQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7IH0iXX0=