import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector:"adminComponent",
    // template:"<div>placehlder of admin compo</div>"
   templateUrl: "admin.component.html"
})

export class AdminComponent {//orphan need to register where...

    constructor(private router: Router) { }

    logout() {
        this.router.navigateByUrl("/");//it will go to default route means main default route is store
    }
}
