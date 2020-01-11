import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { FileUploadModule } from 'primeng/fileupload';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EnrichmentComponent } from './enrichment/enrichment.component';

@NgModule({
  declarations: [
    AppComponent,
    EnrichmentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    FileUploadModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
