import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { StoreModule } from "./store/store.module";
import { StoreComponent } from "./store/store.component";
import { CheckoutComponent } from "./store/checkout.component";
import { CartDetailComponent } from "./store/cartDetail.component";
import { RouterModule } from "@angular/router";

@NgModule({
  imports: [
    BrowserModule,
    StoreModule,
    RouterModule.forRoot([
      {
        path: "store",
        component: StoreComponent,
      },
      {
        path: "cart",
        component: CartDetailComponent,
      },
      {
        path: "checkout",
        component: CheckoutComponent,
      },
      {
        path: "admin",
        loadChildren: "./admin/admin.module#AdminModule",//u have to lazy load then use loadChildren
        //component :Admincomponent //see in the dom tree this is what happening
        //so store component is replaced by Admin component so from app-outlet of app module it will be placed
        //now Admin component became the child of App component and admin componet
      },
      { path: "**", redirectTo: "/store" },
    ]),
  ],
  providers: [],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

//in the file class name AdminModule
//one suggestion always use placeholder for routing and then see routing is working or not
