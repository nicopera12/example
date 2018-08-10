"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var app_global_1 = require("../../global/app.global");
var platformModule = require("tns-core-modules/platform");
var HdiActionbarComponent = /** @class */ (function () {
    function HdiActionbarComponent(_appGlobal, page, _routerExtensions) {
        this._appGlobal = _appGlobal;
        this._routerExtensions = _routerExtensions;
        /*transition*/
        this.transition = 'slide';
        /*layout*/
        this.layout = {
            'header': {
                'logo': 13,
                'ico1': 4,
                'lat': 11,
                'h': 15
            }
        };
        /*screen*/
        this.screen = {
            'deviceType': platformModule.device.deviceType,
            'widthPixels': platformModule.screen.mainScreen.widthPixels,
            'heightPixels': platformModule.screen.mainScreen.heightPixels,
            'scale': platformModule.screen.mainScreen.scale
        };
        page.actionBarHidden = true;
    }
    HdiActionbarComponent.prototype.ngOnInit = function () {
        //orientation
        var phoneW = (this.screen.widthPixels < this.screen.heightPixels ? this.screen.widthPixels : this.screen.heightPixels);
        var phoneH = (this.screen.heightPixels > this.screen.widthPixels ? this.screen.heightPixels : this.screen.widthPixels);
        //header
        this.layout.header.logo = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.header.logo);
        this.layout.header.ico1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.header.ico1);
        this.layout.header.lat = this._appGlobal.screenRes(phoneW, this.screen.scale, this.layout.header.lat);
        this.layout.header.h = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.header.h);
        //icons
        this.icoHdi = String.fromCharCode(0xe911);
        this.angleLeft = String.fromCharCode(0xe90c);
    };
    HdiActionbarComponent.prototype.onButtonBack = function () {
        this._routerExtensions.back();
    };
    HdiActionbarComponent = __decorate([
        core_1.Component({
            selector: "HdiActionbar",
            moduleId: module.id,
            templateUrl: "./hdi-actionbar.component.html",
            styleUrls: ["./hdi-actionbar.component.css"]
        }),
        __metadata("design:paramtypes", [app_global_1.AppGlobal,
            page_1.Page,
            router_1.RouterExtensions])
    ], HdiActionbarComponent);
    return HdiActionbarComponent;
}());
exports.HdiActionbarComponent = HdiActionbarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGRpLWFjdGlvbmJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZGktYWN0aW9uYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBK0Q7QUFDL0QsZ0NBQStCO0FBQy9CLHNEQUFvRDtBQUVwRCwwREFBNEQ7QUFRNUQ7SUEyQkksK0JBQ1ksVUFBcUIsRUFDN0IsSUFBVSxFQUNGLGlCQUFtQztRQUZuQyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBRXJCLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBa0I7UUE1Qi9DLGNBQWM7UUFDUCxlQUFVLEdBQUcsT0FBTyxDQUFDO1FBTTVCLFVBQVU7UUFDSCxXQUFNLEdBQUc7WUFDWixRQUFRLEVBQUU7Z0JBQ04sTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLENBQUM7Z0JBQ1QsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsR0FBRyxFQUFFLEVBQUU7YUFDVjtTQUNKLENBQUM7UUFFRixVQUFVO1FBQ0gsV0FBTSxHQUFHO1lBQ1osWUFBWSxFQUFFLGNBQWMsQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUM5QyxhQUFhLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsV0FBVztZQUMzRCxjQUFjLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWTtZQUM3RCxPQUFPLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSztTQUNsRCxDQUFDO1FBT0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELHdDQUFRLEdBQVI7UUFDSSxhQUFhO1FBQ2IsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDekgsSUFBTSxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7UUFFekgsUUFBUTtRQUNSLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFHbEcsT0FBTztRQUNQLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFakQsQ0FBQztJQUVELDRDQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDbEMsQ0FBQztJQXZEUSxxQkFBcUI7UUFOakMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsZ0NBQWdDO1lBQzdDLFNBQVMsRUFBRSxDQUFDLCtCQUErQixDQUFDO1NBQy9DLENBQUM7eUNBNkIwQixzQkFBUztZQUN2QixXQUFJO1lBQ2lCLHlCQUFnQjtPQTlCdEMscUJBQXFCLENBd0RqQztJQUFELDRCQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksc0RBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7IEFwcEdsb2JhbCB9IGZyb20gJy4uLy4uL2dsb2JhbC9hcHAuZ2xvYmFsJztcblxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhkaUFjdGlvbmJhclwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9oZGktYWN0aW9uYmFyLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hkaS1hY3Rpb25iYXIuY29tcG9uZW50LmNzc1wiXVxufSlcbmV4cG9ydCBjbGFzcyBIZGlBY3Rpb25iYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgLyp0cmFuc2l0aW9uKi9cbiAgICBwdWJsaWMgdHJhbnNpdGlvbiA9ICdzbGlkZSc7XG5cbiAgICAvKmljb25zKi9cbiAgICBwdWJsaWMgaWNvSGRpO1xuICAgIHB1YmxpYyBhbmdsZUxlZnQ7XG5cbiAgICAvKmxheW91dCovXG4gICAgcHVibGljIGxheW91dCA9IHtcbiAgICAgICAgJ2hlYWRlcic6IHtcbiAgICAgICAgICAgICdsb2dvJzogMTMsXG4gICAgICAgICAgICAnaWNvMSc6IDQsXG4gICAgICAgICAgICAnbGF0JzogMTEsXG4gICAgICAgICAgICAnaCc6IDE1XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLypzY3JlZW4qL1xuICAgIHB1YmxpYyBzY3JlZW4gPSB7XG4gICAgICAgICdkZXZpY2VUeXBlJzogcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGUsXG4gICAgICAgICd3aWR0aFBpeGVscyc6IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzLFxuICAgICAgICAnaGVpZ2h0UGl4ZWxzJzogcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzLFxuICAgICAgICAnc2NhbGUnOiBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5zY2FsZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYXBwR2xvYmFsOiBBcHBHbG9iYWwsXG4gICAgICAgIHBhZ2U6IFBhZ2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvL29yaWVudGF0aW9uXG4gICAgICAgIGNvbnN0IHBob25lVyA9ICh0aGlzLnNjcmVlbi53aWR0aFBpeGVscyA8IHRoaXMuc2NyZWVuLmhlaWdodFBpeGVscyA/IHRoaXMuc2NyZWVuLndpZHRoUGl4ZWxzIDogdGhpcy5zY3JlZW4uaGVpZ2h0UGl4ZWxzKTtcbiAgICAgICAgY29uc3QgcGhvbmVIID0gKHRoaXMuc2NyZWVuLmhlaWdodFBpeGVscyA+IHRoaXMuc2NyZWVuLndpZHRoUGl4ZWxzID8gdGhpcy5zY3JlZW4uaGVpZ2h0UGl4ZWxzIDogdGhpcy5zY3JlZW4ud2lkdGhQaXhlbHMpO1xuXG4gICAgICAgIC8vaGVhZGVyXG4gICAgICAgIHRoaXMubGF5b3V0LmhlYWRlci5sb2dvID0gdGhpcy5fYXBwR2xvYmFsLnNjcmVlblJlcyhwaG9uZUgsIHRoaXMuc2NyZWVuLnNjYWxlLCB0aGlzLmxheW91dC5oZWFkZXIubG9nbyk7XG4gICAgICAgIHRoaXMubGF5b3V0LmhlYWRlci5pY28xID0gdGhpcy5fYXBwR2xvYmFsLnNjcmVlblJlcyhwaG9uZUgsIHRoaXMuc2NyZWVuLnNjYWxlLCB0aGlzLmxheW91dC5oZWFkZXIuaWNvMSk7XG4gICAgICAgIHRoaXMubGF5b3V0LmhlYWRlci5sYXQgPSB0aGlzLl9hcHBHbG9iYWwuc2NyZWVuUmVzKHBob25lVywgdGhpcy5zY3JlZW4uc2NhbGUsIHRoaXMubGF5b3V0LmhlYWRlci5sYXQpO1xuICAgICAgICB0aGlzLmxheW91dC5oZWFkZXIuaCA9IHRoaXMuX2FwcEdsb2JhbC5zY3JlZW5SZXMocGhvbmVILCB0aGlzLnNjcmVlbi5zY2FsZSwgdGhpcy5sYXlvdXQuaGVhZGVyLmgpO1xuXG4gICAgICAgXG4gICAgICAgIC8vaWNvbnNcbiAgICAgICAgdGhpcy5pY29IZGkgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZTkxMSk7XG4gICAgICAgIHRoaXMuYW5nbGVMZWZ0ID0gU3RyaW5nLmZyb21DaGFyQ29kZSgweGU5MGMpO1xuIFxuICAgIH1cblxuICAgIG9uQnV0dG9uQmFjaygpIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG4gICAgfVxufSJdfQ==