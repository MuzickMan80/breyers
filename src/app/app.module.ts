import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";

import { GoogleSheetsDbService } from "ng-google-sheets-db";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
  providers: [GoogleSheetsDbService]
})
export class AppModule {}
