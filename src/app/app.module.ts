import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AgGridModule } from 'ag-grid-angular'
import { HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component'

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,  
    HttpClientModule,   
    AgGridModule.withComponents([])
  ],
  declarations: [ 
    AppComponent
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
