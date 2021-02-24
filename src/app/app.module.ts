import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { from } from 'rxjs';
import { LoginComponent } from './login/login.component';
import { DashboardLayoutComponent } from './dashboard/dashboard-layout/dashboard-layout.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthGuard } from './authguard';
import { FooterComponent } from './dashboard/footer/footer.component';
import { ProductComponent } from './dashboard/product/product.component';
import { HomeComponent } from './dashboard/home/home.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CanDeactivateGuard } from './can-deactivate-guard.service';
import { MatButtonModule } from '@angular/material/button';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardLayoutComponent,
    FooterComponent,
    ProductComponent,
    HomeComponent,
    AdminComponent,
    AddProductModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule

    ],
  providers: [AuthGuard, CanDeactivateGuard, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
