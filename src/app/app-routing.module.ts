import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { MainComponent } from './main/main.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';



const routes: Routes = [
  { path: '',redirectTo:"/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'main', component: MainComponent },
  { path: 'shoppingList', component: ShoppingListComponent },
  { path: 'product', component: ProductComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo:'login', pathMatch: 'full'}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  paramMap: any;
}
