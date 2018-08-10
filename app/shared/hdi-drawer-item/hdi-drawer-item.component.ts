import { Component, Input, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

/* ***********************************************************
* Keep data that is displayed as drawer items in the MyDrawer component class.
*************************************************************/
@Component({
    selector: "HdiDrawerItem",
    moduleId: module.id,
    templateUrl: "./hdi-drawer-item.component.html",
    styleUrls: ["./hdi-drawer-item.component.css"]
})
export class HdiDrawerItemComponent implements OnInit {
    @Input() title: string;
    @Input() route: string;
    @Input() icon: string;
    @Input() isSelected: boolean;

    constructor(private routerExtensions: RouterExtensions) {

    }

    ngOnInit(): void {

    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}