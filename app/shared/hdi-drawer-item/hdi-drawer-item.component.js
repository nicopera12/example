"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
var HdiDrawerItemComponent = /** @class */ (function () {
    function HdiDrawerItemComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
    }
    HdiDrawerItemComponent.prototype.ngOnInit = function () {
    };
    HdiDrawerItemComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HdiDrawerItemComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HdiDrawerItemComponent.prototype, "route", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], HdiDrawerItemComponent.prototype, "icon", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], HdiDrawerItemComponent.prototype, "isSelected", void 0);
    HdiDrawerItemComponent = __decorate([
        core_1.Component({
            selector: "HdiDrawerItem",
            moduleId: module.id,
            templateUrl: "./hdi-drawer-item.component.html",
            styleUrls: ["./hdi-drawer-item.component.css"]
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], HdiDrawerItemComponent);
    return HdiDrawerItemComponent;
}());
exports.HdiDrawerItemComponent = HdiDrawerItemComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGRpLWRyYXdlci1pdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhkaS1kcmF3ZXItaXRlbS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsc0RBQStEO0FBRS9EOzs4REFFOEQ7QUFPOUQ7SUFNSSxnQ0FBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7SUFFdEQsQ0FBQztJQUVELHlDQUFRLEdBQVI7SUFFQSxDQUFDO0lBRUQsNkNBQVksR0FBWixVQUFhLFlBQW9CO1FBQzdCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUMzQyxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE1BQU07YUFDZjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFuQlE7UUFBUixZQUFLLEVBQUU7O3lEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7O3lEQUFlO0lBQ2Q7UUFBUixZQUFLLEVBQUU7O3dEQUFjO0lBQ2I7UUFBUixZQUFLLEVBQUU7OzhEQUFxQjtJQUpwQixzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsa0NBQWtDO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGlDQUFpQyxDQUFDO1NBQ2pELENBQUM7eUNBT3dDLHlCQUFnQjtPQU43QyxzQkFBc0IsQ0FxQmxDO0lBQUQsNkJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3REFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiogS2VlcCBkYXRhIHRoYXQgaXMgZGlzcGxheWVkIGFzIGRyYXdlciBpdGVtcyBpbiB0aGUgTXlEcmF3ZXIgY29tcG9uZW50IGNsYXNzLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhkaURyYXdlckl0ZW1cIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaGRpLWRyYXdlci1pdGVtLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbXCIuL2hkaS1kcmF3ZXItaXRlbS5jb21wb25lbnQuY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIEhkaURyYXdlckl0ZW1Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG4gICAgQElucHV0KCkgcm91dGU6IHN0cmluZztcbiAgICBASW5wdXQoKSBpY29uOiBzdHJpbmc7XG4gICAgQElucHV0KCkgaXNTZWxlY3RlZDogYm9vbGVhbjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucykge1xuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtuYXZJdGVtUm91dGVdLCB7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufSJdfQ==