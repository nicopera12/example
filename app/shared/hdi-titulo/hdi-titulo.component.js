"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var app_global_1 = require("../../global/app.global");
var platformModule = require("tns-core-modules/platform");
var HdiTituloComponent = /** @class */ (function () {
    function HdiTituloComponent(_appGlobal, page) {
        this._appGlobal = _appGlobal;
        /*layout*/
        this.layout = {
            'titPrinc': {
                't1': 3.5,
                't2': 2.5,
                'paddL': 4,
                'ico1': 8,
                'h': 12
            },
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
    HdiTituloComponent.prototype.ngOnInit = function () {
        //orientation
        var phoneW = (this.screen.widthPixels < this.screen.heightPixels ? this.screen.widthPixels : this.screen.heightPixels);
        var phoneH = (this.screen.heightPixels > this.screen.widthPixels ? this.screen.heightPixels : this.screen.widthPixels);
        //titPrinc
        this.layout.titPrinc.t1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.t1);
        this.layout.titPrinc.t2 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.t2);
        this.layout.titPrinc.paddL = this._appGlobal.screenRes(phoneW, this.screen.scale, this.layout.titPrinc.paddL);
        this.layout.titPrinc.ico1 = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.ico1);
        this.layout.titPrinc.h = this._appGlobal.screenRes(phoneH, this.screen.scale, this.layout.titPrinc.h);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], HdiTituloComponent.prototype, "icono", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HdiTituloComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HdiTituloComponent.prototype, "descripcion", void 0);
    HdiTituloComponent = __decorate([
        core_1.Component({
            selector: "HdiTitulo",
            moduleId: module.id,
            templateUrl: "./hdi-titulo.component.html",
            styleUrls: ["./hdi-titulo.component.css"]
        }),
        __metadata("design:paramtypes", [app_global_1.AppGlobal,
            page_1.Page])
    ], HdiTituloComponent);
    return HdiTituloComponent;
}());
exports.HdiTituloComponent = HdiTituloComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGRpLXRpdHVsby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZGktdGl0dWxvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxnQ0FBK0I7QUFDL0Isc0RBQW9EO0FBRXBELDBEQUE0RDtBQVE1RDtJQXdCSSw0QkFDWSxVQUFxQixFQUM3QixJQUFVO1FBREYsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQXBCakMsVUFBVTtRQUNILFdBQU0sR0FBRztZQUNaLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsR0FBRztnQkFDVCxJQUFJLEVBQUUsR0FBRztnQkFDVCxPQUFPLEVBQUUsQ0FBQztnQkFDVixNQUFNLEVBQUUsQ0FBQztnQkFDVCxHQUFHLEVBQUUsRUFBRTthQUNWO1NBQ0osQ0FBQztRQUVELFVBQVU7UUFDSCxXQUFNLEdBQUc7WUFDYixZQUFZLEVBQUUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxVQUFVO1lBQzlDLGFBQWEsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxXQUFXO1lBQzNELGNBQWMsRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZO1lBQzdELE9BQU8sRUFBRSxjQUFjLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFLO1NBQ2xELENBQUM7UUFNRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBQ0QscUNBQVEsR0FBUjtRQUNJLGFBQWE7UUFDYixJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN6SCxJQUFNLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV6SCxVQUFVO1FBQ1YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUN4RyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3hHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzFHLENBQUM7SUF4Q1E7UUFBUixZQUFLLEVBQUU7O3FEQUFPO0lBQ047UUFBUixZQUFLLEVBQUU7O3NEQUFnQjtJQUNmO1FBQVIsWUFBSyxFQUFFOzsyREFBcUI7SUFIcEIsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDZCQUE2QjtZQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsQ0FBQztTQUM1QyxDQUFDO3lDQTBCMEIsc0JBQVM7WUFDdkIsV0FBSTtPQTFCTCxrQkFBa0IsQ0EwQzlCO0lBQUQseUJBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBBcHBHbG9iYWwgfSBmcm9tICcuLi8uLi9nbG9iYWwvYXBwLmdsb2JhbCc7XG5cbmltcG9ydCAqIGFzIHBsYXRmb3JtTW9kdWxlIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIZGlUaXR1bG9cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaGRpLXRpdHVsby5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9oZGktdGl0dWxvLmNvbXBvbmVudC5jc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgSGRpVGl0dWxvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSBpY29ubztcbiAgICBASW5wdXQoKSB0aXR1bG86IHN0cmluZztcbiAgICBASW5wdXQoKSBkZXNjcmlwY2lvbjogc3RyaW5nO1xuXG4gICAgLypsYXlvdXQqL1xuICAgIHB1YmxpYyBsYXlvdXQgPSB7XG4gICAgICAgICd0aXRQcmluYyc6IHtcbiAgICAgICAgICAgICd0MSc6IDMuNSxcbiAgICAgICAgICAgICd0Mic6IDIuNSxcbiAgICAgICAgICAgICdwYWRkTCc6IDQsXG4gICAgICAgICAgICAnaWNvMSc6IDgsXG4gICAgICAgICAgICAnaCc6IDEyXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgICAvKnNjcmVlbiovXG4gICAgIHB1YmxpYyBzY3JlZW4gPSB7XG4gICAgICAgICdkZXZpY2VUeXBlJzogcGxhdGZvcm1Nb2R1bGUuZGV2aWNlLmRldmljZVR5cGUsXG4gICAgICAgICd3aWR0aFBpeGVscyc6IHBsYXRmb3JtTW9kdWxlLnNjcmVlbi5tYWluU2NyZWVuLndpZHRoUGl4ZWxzLFxuICAgICAgICAnaGVpZ2h0UGl4ZWxzJzogcGxhdGZvcm1Nb2R1bGUuc2NyZWVuLm1haW5TY3JlZW4uaGVpZ2h0UGl4ZWxzLFxuICAgICAgICAnc2NhbGUnOiBwbGF0Zm9ybU1vZHVsZS5zY3JlZW4ubWFpblNjcmVlbi5zY2FsZVxuICAgIH07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBfYXBwR2xvYmFsOiBBcHBHbG9iYWwsXG4gICAgICAgIHBhZ2U6IFBhZ2VcbiAgICApIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy9vcmllbnRhdGlvblxuICAgICAgICBjb25zdCBwaG9uZVcgPSAodGhpcy5zY3JlZW4ud2lkdGhQaXhlbHMgPCB0aGlzLnNjcmVlbi5oZWlnaHRQaXhlbHMgPyB0aGlzLnNjcmVlbi53aWR0aFBpeGVscyA6IHRoaXMuc2NyZWVuLmhlaWdodFBpeGVscyk7XG4gICAgICAgIGNvbnN0IHBob25lSCA9ICh0aGlzLnNjcmVlbi5oZWlnaHRQaXhlbHMgPiB0aGlzLnNjcmVlbi53aWR0aFBpeGVscyA/IHRoaXMuc2NyZWVuLmhlaWdodFBpeGVscyA6IHRoaXMuc2NyZWVuLndpZHRoUGl4ZWxzKTtcblxuICAgICAgICAvL3RpdFByaW5jXG4gICAgICAgIHRoaXMubGF5b3V0LnRpdFByaW5jLnQxID0gdGhpcy5fYXBwR2xvYmFsLnNjcmVlblJlcyhwaG9uZUgsIHRoaXMuc2NyZWVuLnNjYWxlLCB0aGlzLmxheW91dC50aXRQcmluYy50MSk7XG4gICAgICAgIHRoaXMubGF5b3V0LnRpdFByaW5jLnQyID0gdGhpcy5fYXBwR2xvYmFsLnNjcmVlblJlcyhwaG9uZUgsIHRoaXMuc2NyZWVuLnNjYWxlLCB0aGlzLmxheW91dC50aXRQcmluYy50Mik7XG4gICAgICAgIHRoaXMubGF5b3V0LnRpdFByaW5jLnBhZGRMID0gdGhpcy5fYXBwR2xvYmFsLnNjcmVlblJlcyhwaG9uZVcsIHRoaXMuc2NyZWVuLnNjYWxlLCB0aGlzLmxheW91dC50aXRQcmluYy5wYWRkTCk7XG4gICAgICAgIHRoaXMubGF5b3V0LnRpdFByaW5jLmljbzEgPSB0aGlzLl9hcHBHbG9iYWwuc2NyZWVuUmVzKHBob25lSCwgdGhpcy5zY3JlZW4uc2NhbGUsIHRoaXMubGF5b3V0LnRpdFByaW5jLmljbzEpO1xuICAgICAgICB0aGlzLmxheW91dC50aXRQcmluYy5oID0gdGhpcy5fYXBwR2xvYmFsLnNjcmVlblJlcyhwaG9uZUgsIHRoaXMuc2NyZWVuLnNjYWxlLCB0aGlzLmxheW91dC50aXRQcmluYy5oKTtcbiAgICB9XG59Il19