import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeBookComponent } from './work/angular-work/recipe-book/recipe-book.component';
import { ArtgogoComponent } from './work/android-work/artgogo/artgogo.component';
import { SupplierInformationComponent } from './work/python-work/supplier-information/supplier-information.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    {path:'work',component:WorkComponent},
    {path:'work/recipeBook',component:RecipeBookComponent},
    {path:'work/supplierInformation',component:SupplierInformationComponent},
    {path:'work/artgogo',component:ArtgogoComponent},
    {path:'contact',component:ContactComponent},
    { path: '**', redirectTo:'/home' ,pathMatch:'full'}
]

@NgModule({
    imports:[
        RouterModule.forRoot(appRoutes)
    ],

    exports:[RouterModule]
})

export class AppRoutingModule{
    
}
