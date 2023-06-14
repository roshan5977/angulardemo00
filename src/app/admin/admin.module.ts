import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { ProductTableComponent } from "./productTable.component";
import { ProductEditorComponent } from "./productEditor.component";
import { OrderTableComponent } from "./orderTable.component";

// router outlet (store)  clickAdmin-> main->Admincomponent->products->ProductTableComponent->ProductTableComponent.html

let routing = RouterModule.forChild([
  {
    path: "main",
    component: AdminComponent, //component can decide its default componeet ->ProductTableComponent
    children: [
      //template //Besides Angular modules Angular componnrt can deliver default compoenets .
      // mostly child of componet is template.//
      { path: "products/:mode/:id", component: ProductEditorComponent }, //see this mode is edit and id is may be 1 (for ex)  but here
      // ProductEditorComponent it is invoked then showimg its template and can a regular compoenet acess to router tree parameter ?
      //  no //so its need a angular internal service named Activated route then by using this we willget the data and from repository we will get prodct withh that id then and we will show in its template
      { path: "products/:mode", component: ProductEditorComponent }, //now see this mode is create ...
      { path: "products", component: ProductTableComponent }, //and products means compoent will be ProductTableComponent
      { path: "orders", component: OrderTableComponent }, //where it comes from localhost /order not directly temp->compo->repo->rest-azax>localhost
      { path: "**", redirectTo: "products" }, //first default ic products
    ],
  },
  { path: "**", redirectTo: "main" }, //default is main.which is Admin component
]);

// CommonModule ->for a lazy loading
// Exports all the basic Angular directives and pipes, such as NgIf, NgForOf, DecimalPipe, and so on.
// Re-exported by BrowserModule, which is included automatically in the root AppModule
// when you create a new app with the CLI new command.

// The providers options configure the
@NgModule({
  imports: [ FormsModule, routing], // Dependency Modules
  providers: [],
  declarations: [
    AdminComponent, //see here its registered
    ProductTableComponent,
    ProductEditorComponent,
    OrderTableComponent,
  ],
})
export class AdminModule {} // lazy loaded.

// thr root module ,feature module and the components can serve default components through their router tree's
//three style of writing router tree
//RouterModule.forRoot()  //root module can provide  router tree
//RouterModule.forChild() //feature module can serve router tree and serve default componenet
//Children:[] //component can have its router tree //so feature component can have default component

//  Router tree ->mode="edit",id=1

// router link                                   ActivatedRoute




//
// ProductTable                                                               ProductEditor














// The pipe 'currency' could not be found ("
//             <td>{{p.name}}</td>
//             <td>{{p.category}}</td>
//             <td>{{[ERROR ->]p.price | currency:"USD":"symbol":"2.2-2"}}</td>
//             <td>

// "): ng:///AdminModule/ProductTableComponent.html@12:18
// Can't bind to 'ngForOf' since it isn't a known property of 'tr'. ("
