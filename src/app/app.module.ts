import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { AngularWorkComponent } from './work/angular-work/angular-work.component';
import { PythonWorkComponent } from './work/python-work/python-work.component';
import { AndroidWorkComponent } from './work/android-work/android-work.component';
import { RecipeBookComponent } from './work/angular-work/recipe-book/recipe-book.component';
import { WorkStoreService } from './work/work-store.service';
import { ArtgogoComponent } from './work/android-work/artgogo/artgogo.component';
import { SupplierInformationComponent } from './work/python-work/supplier-information/supplier-information.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    WorkComponent,
    ContactComponent,
    AngularWorkComponent,
    PythonWorkComponent,
    AndroidWorkComponent,
    RecipeBookComponent,
    ArtgogoComponent,
    SupplierInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [WorkStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
