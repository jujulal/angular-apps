import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.css']
})
export class FilePreviewComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FilePreviewComponent>) { }

  ngOnInit() {
  }

}
