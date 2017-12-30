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
    isLoggedIn = localStorage.getItem('isLoggedin');
    data;
    fetchData(){
        localStorage.setItem('isLoggedin', 'false');
        this.isLoggedIn = localStorage.getItem('isLoggedin');
        this.data = this.http.get('/api/poems', {responseType: 'json'});
    }
    ngOnInit() {}
}
