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
import { BoardReaderComponent } from './work/python-work/board-reader/board-reader.component';
import { BoxCounterComponent } from './work/python-work/box-counter/box-counter.component';
import { WebBlockComponent } from './work/python-work/web-block/web-block.component';
import { InteractiveDictionaryComponent } from './work/python-work/interactive-dictionary/interactive-dictionary.component';
import { WebMapComponent } from './work/python-work/web-map/web-map.component';
import { BombComponent } from './work/android-work/bomb/bomb.component';
import { SnakeComponent } from './work/android-work/snake/snake.component';
import { AvoidComponent } from './work/android-work/avoid/avoid.component';
import { CalculatorComponent } from './work/android-work/calculator/calculator.component';
import { TimelineComponent } from './profile/timeline/timeline.component';
import { LeftPartComponent } from './profile/left-part/left-part.component';
import { RightPartComponent } from './profile/right-part/right-part.component';
import { ProfileStoreService } from './profile/profile-store.service';

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
    SupplierInformationComponent,
    BoardReaderComponent,
    BoxCounterComponent,
    WebBlockComponent,
    InteractiveDictionaryComponent,
    WebMapComponent,
    BombComponent,
    SnakeComponent,
    AvoidComponent,
    CalculatorComponent,
    TimelineComponent,
    LeftPartComponent,
    RightPartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [WorkStoreService,ProfileStoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
