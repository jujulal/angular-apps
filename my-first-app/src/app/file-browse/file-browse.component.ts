import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FilePreviewComponent } from '../file-preview/file-preview.component';

@Component({
  selector: 'file-browse',
  templateUrl: './file-browse.component.html',
  styleUrls: ['./file-browse.component.css']
})
export class FileBrowseComponent implements OnInit {
  files: any = [];

  constructor(private httpClient: HttpClient, private matDialog: MatDialog ) { }

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.files = data; 
    })
  }

  openDialog(){
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false; 
    dialogConfig.autoFocus = true;
    dialogConfig.height = "400px";
    dialogConfig.width = "600px";


    let dialogRef = this.matDialog.open(FilePreviewComponent, {height: '400px',
    width: '600px'});
  }

}
