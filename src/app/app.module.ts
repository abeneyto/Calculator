import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultViewerComponent } from './calculator/components/result-viewer/result-viewer.component';
import { KeyboardComponent } from './calculator/components/keyboard/keyboard.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultViewerComponent,
    KeyboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
