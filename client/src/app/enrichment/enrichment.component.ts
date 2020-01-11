import { Component, OnInit } from '@angular/core';
import { ReadKeyExpr } from '@angular/compiler';

@Component({
  selector: 'app-enrichment',
  templateUrl: './enrichment.component.html',
  styleUrls: ['./enrichment.component.css']
})
export class EnrichmentComponent implements OnInit {

    file: File;
    reader: FileReader;

    constructor() {
        this.reader = new FileReader();
    }

    ngOnInit() {
    }

    uploadFile(event) {
        console.log('uploading');
        for (const file of event.files) {
            this.file = file;
            this.reader.readAsText(this.file);
        }
    }

    onUpload(event) {
        console.log('upload complete');
        console.log(this.reader.result);
    }
}
