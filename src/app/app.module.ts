import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';
//import {GrdFilterPipe} from './grid-filer.pipe';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Data1Component } from './data1/data1.component';

@NgModule({
  declarations: [
    AppComponent,
    Data1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
