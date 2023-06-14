import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";

@Component({
  selector: "productEditorComponent",
  templateUrl: "productEditor.component.html",
})

export class ProductEditorComponent {
  editing: boolean = false;
  product: Product = new Product(); //null then  first record.

  constructor(
    private repository: ProductRepository,
    private router: Router,
    activeRoute: ActivatedRoute
  ) {

    this.editing = activeRoute.snapshot.params["mode"] == "edit";  // true

    // Contains the information about a route associated with a component loaded in an outlet.
    // An ActivatedRoute can also be used to traverse the router state tree.



    if (this.editing) { // true
      // true
      Object.assign( // ES5 method
        this.product,
        repository.getProduct(activeRoute.snapshot.params["id"]) //now from here it  will get product from repo
      );
    }
  }

  save(form: NgForm) {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
