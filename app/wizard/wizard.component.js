"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var app_global_1 = require("../global/app.global");
var router_1 = require("@angular/router");
var WizardComponent = /** @class */ (function () {
    function WizardComponent(_appGlobal, _route, page) {
        var _this = this;
        this._appGlobal = _appGlobal;
        this._route = _route;
        /*transition*/
        this.transition = 'slide';
        this._route.params.forEach(function (params) { _this.id = +params["id"]; });
        page.actionBarHidden = true;
    }
    WizardComponent.prototype.ngOnInit = function () {
        console.log("PARAM ---> " + this.id);
    };
    WizardComponent = __decorate([
        core_1.Component({
            selector: "Wizard",
            moduleId: module.id,
            templateUrl: "./wizard.component.html",
            styleUrls: ['./wizard.component.css'],
            providers: [app_global_1.AppGlobal]
        }),
        __metadata("design:paramtypes", [app_global_1.AppGlobal,
            router_1.ActivatedRoute,
            page_1.Page])
    ], WizardComponent);
    return WizardComponent;
}());
exports.WizardComponent = WizardComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2l6YXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndpemFyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsZ0NBQStCO0FBQy9CLG1EQUFpRDtBQUVqRCwwQ0FBaUQ7QUFXakQ7SUFNSSx5QkFDWSxVQUFxQixFQUNyQixNQUFzQixFQUM5QixJQUFVO1FBSGQsaUJBT0M7UUFOVyxlQUFVLEdBQVYsVUFBVSxDQUFXO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBTGxDLGNBQWM7UUFDUCxlQUFVLEdBQUcsT0FBTyxDQUFDO1FBT3hCLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDRyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWpCUSxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztZQUNyQyxTQUFTLEVBQUUsQ0FBQyxzQkFBUyxDQUFDO1NBQ3pCLENBQUM7eUNBUTBCLHNCQUFTO1lBQ2IsdUJBQWM7WUFDeEIsV0FBSTtPQVRMLGVBQWUsQ0FrQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHsgQXBwR2xvYmFsIH0gZnJvbSAnLi4vZ2xvYmFsL2FwcC5nbG9iYWwnO1xuXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0ICogYXMgcGxhdGZvcm1Nb2R1bGUgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9wbGF0Zm9ybSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIldpemFyZFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi93aXphcmQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi93aXphcmQuY29tcG9uZW50LmNzcyddLFxuICAgIHByb3ZpZGVyczogW0FwcEdsb2JhbF1cbn0pXG5leHBvcnQgY2xhc3MgV2l6YXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcblxuICAgIC8qdHJhbnNpdGlvbiovXG4gICAgcHVibGljIHRyYW5zaXRpb24gPSAnc2xpZGUnO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2FwcEdsb2JhbDogQXBwR2xvYmFsLFxuICAgICAgICBwcml2YXRlIF9yb3V0ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgICAgIHBhZ2U6IFBhZ2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5fcm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdOyB9KTtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgIGNvbnNvbGUubG9nKFwiUEFSQU0gLS0tPiBcIiArIHRoaXMuaWQpO1xuICAgIH1cbn0iXX0=