import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
    selector: 'app-blank-page',
    templateUrl: './blank-page.component.html',
    styleUrls: ['./blank-page.component.scss']
})
export class BlankPageComponent implements OnInit {
    constructor(private http: HttpClient) {}

    title = 'app';
    data;
    fetchData(){
    this.data = this.http.get('/api/poems', {responseType: 'json'});
    }
    ngOnInit() {}
}
