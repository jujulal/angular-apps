import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"

import { AppComponent } from './app.component';
import { FileBrowseComponent } from './file-browse/file-browse.component';
import { FilePreviewComponent } from './file-preview/file-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    FileBrowseComponent,
    FilePreviewComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  entryComponents: [ FilePreviewComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
