"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppGlobal = /** @class */ (function () {
    function AppGlobal() {
    }
    AppGlobal.prototype.screenRes = function (size, scale, percentage) {
        var res = Math.floor(((size / scale) * percentage) / 100);
        //console.log('size: ' + size + ' scale: ' + scale + ' percentage: ' + percentage + ' res: ' + res);
        return res;
    };
    AppGlobal.prototype.rowsCant = function (cant) {
        var res = "";
        for (var i = 0; i < cant; i++) {
            res += (res.length > 0 ? "," : "") + "auto";
        }
        return res;
    };
    AppGlobal.prototype.transform = function (value) {
        return value.replace(/\D/g, '');
    };
    AppGlobal = __decorate([
        core_1.Injectable()
    ], AppGlobal);
    return AppGlobal;
}());
exports.AppGlobal = AppGlobal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmdsb2JhbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5nbG9iYWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFHM0M7SUFBQTtJQWdCQSxDQUFDO0lBZkcsNkJBQVMsR0FBVCxVQUFVLElBQVksRUFBRSxLQUFhLEVBQUUsVUFBa0I7UUFDckQsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQyxHQUFHLFVBQVUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQzFELG9HQUFvRztRQUNwRyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUNELDRCQUFRLEdBQVIsVUFBUyxJQUFJO1FBQ1QsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2IsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUM1QixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUM7UUFDaEQsQ0FBQztRQUNELE1BQU0sQ0FBQyxHQUFHLENBQUM7SUFDZixDQUFDO0lBQ0QsNkJBQVMsR0FBVCxVQUFVLEtBQUs7UUFDWCxNQUFNLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQWZRLFNBQVM7UUFEckIsaUJBQVUsRUFBRTtPQUNBLFNBQVMsQ0FnQnJCO0lBQUQsZ0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFwcEdsb2JhbCB7XG4gICAgc2NyZWVuUmVzKHNpemU6IG51bWJlciwgc2NhbGU6IG51bWJlciwgcGVyY2VudGFnZTogbnVtYmVyKSB7XG4gICAgICAgIHZhciByZXMgPSBNYXRoLmZsb29yKCgoc2l6ZSAvIHNjYWxlKSAqIHBlcmNlbnRhZ2UpIC8gMTAwKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2l6ZTogJyArIHNpemUgKyAnIHNjYWxlOiAnICsgc2NhbGUgKyAnIHBlcmNlbnRhZ2U6ICcgKyBwZXJjZW50YWdlICsgJyByZXM6ICcgKyByZXMpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICByb3dzQ2FudChjYW50KSB7XG4gICAgICAgIGxldCByZXMgPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNhbnQ7IGkrKykge1xuICAgICAgICAgICAgcmVzICs9IChyZXMubGVuZ3RoID4gMCA/IFwiLFwiIDogXCJcIikgKyBcImF1dG9cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICB0cmFuc2Zvcm0odmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyk7XG4gICAgfVxufSJdfQ==