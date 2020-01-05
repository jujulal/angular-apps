import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'file-browse',
  templateUrl: './file-browse.component.html',
  styleUrls: ['./file-browse.component.css']
})
export class FileBrowseComponent implements OnInit {
  files: any = [];

  constructor(private httpClient: HttpClient ) { }

  ngOnInit() {
    this.httpClient.get("assets/data.json").subscribe(data => {
      console.log(data);
      this.files = data; 
    })
  }

}
