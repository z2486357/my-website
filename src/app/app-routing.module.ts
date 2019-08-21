import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { RecipeBookComponent } from './work/angular-work/recipe-book/recipe-book.component';
import { ArtgogoComponent } from './work/android-work/artgogo/artgogo.component';
import { SupplierInformationComponent } from './work/python-work/supplier-information/supplier-information.component';
import { BoardReaderComponent } from './work/python-work/board-reader/board-reader.component';
import { BoxCounterComponent } from './work/python-work/box-counter/box-counter.component';
import { WebBlockComponent } from './work/python-work/web-block/web-block.component';
import { InteractiveDictionaryComponent } from './work/python-work/interactive-dictionary/interactive-dictionary.component';
import { WebMapComponent } from './work/python-work/web-map/web-map.component';
import { BombComponent } from './work/android-work/bomb/bomb.component';
import { SnakeComponent } from './work/android-work/snake/snake.component';
import { AvoidComponent } from './work/android-work/avoid/avoid.component';
import { CalculatorComponent } from './work/android-work/calculator/calculator.component';

const appRoutes:Routes=[
    {path:'',redirectTo:'/home',pathMatch:'full'},
    {path:'home',component:HomeComponent},
    {path:'profile',component:ProfileComponent},
    // work
    {path:'work',component:WorkComponent},
    // angular
    {path:'work/recipeBook',component:RecipeBookComponent},
    // python
    {path:'work/supplierInformation',component:SupplierInformationComponent},
    {path:'work/boardReader',component:BoardReaderComponent},
    {path:'work/boxCounter',component:BoxCounterComponent},
    {path:'work/webBlock',component:WebBlockComponent},
    {path:'work/dictionary',component:InteractiveDictionaryComponent},
    {path:'work/map',component:WebMapComponent},
    // android
    {path:'work/artgogo',component:ArtgogoComponent},
    {path:'work/bomb',component:BombComponent},
    {path:'work/snake',component:SnakeComponent},
    {path:'work/avoid',component:AvoidComponent},
    {path:'work/calculator',component:CalculatorComponent},


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
