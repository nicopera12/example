import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: "HdiDrawer",
    moduleId: module.id,
    templateUrl: "./hdi-drawer.component.html",
    styleUrls: ["./hdi-drawer.component.css"]
})
export class HdiDrawerComponent implements OnInit {
    @Input() selectedPage: string;

    ngOnInit(): void {

    }

    isPageSelected(pageTitle: string): boolean {
        return pageTitle === this.selectedPage;
    }
}