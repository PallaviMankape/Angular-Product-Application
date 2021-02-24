import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../authguard';
import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {
          path: 'home',
          component: HomeComponent
        },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        
      }
      ]
  }
]
;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
