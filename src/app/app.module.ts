import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HorseListComponent } from './horse-list/horse-list.component';
import { HorseListService } from './horse-list/horse-list.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule, 
    BrowserAnimationsModule, 
    FormsModule, 
    HttpClientModule, 
    FlexLayoutModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule
  ],
  declarations: [AppComponent, HorseListComponent],
  bootstrap: [AppComponent],
  providers: [HorseListService],
})
export class AppModule { }