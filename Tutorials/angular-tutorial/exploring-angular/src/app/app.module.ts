import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NgFeaturesService } from './ng-features.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [NgFeaturesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
