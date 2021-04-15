import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppComponent } from "./app.component";

import { HttpClientModule } from '@angular/common/http';
import { HorseListComponent } from './horse-list/horse-list.component';
import { HorseListService } from './horse-list/horse-list.service';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, FlexLayoutModule, MatCardModule, MatToolbarModule],
  declarations: [AppComponent, HorseListComponent],
  bootstrap: [AppComponent],
  providers: [HorseListService]
})
export class AppModule {}
