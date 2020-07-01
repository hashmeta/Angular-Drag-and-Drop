import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatchesCategoryPipe } from './matches-category.pipe';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    DragDropModule
    ],
  declarations: [ AppComponent, HelloComponent, MatchesCategoryPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
