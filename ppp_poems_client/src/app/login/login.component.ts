import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {routerTransition} from '../router.animations';
import * as Querystring from "querystring";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit {
    constructor(public router: Router, private http: HttpClient) {
    }

    name: string;
    password: string;

    applicationInfo: ApplicationInfo;
    token: TokenResponse;

    ngOnInit() {
        this.http.get<ApplicationInfo[]>('/api/application/ppp_app/', {
            responseType: 'json'
        })
            .subscribe(data => {
                this.applicationInfo = data[0];
                console.log(this.applicationInfo.client_id);
                console.log(this.applicationInfo.client_secret);
            }, err => {
                console.log("Error occured.")
            });
    }

    onLoggedIn() {
        let clientString = btoa(this.applicationInfo.client_id + ":" + this.applicationInfo.client_secret);
        let headers = new HttpHeaders()
            .set("Authorization", "Basic " + clientString)
            .set("Content-Type", "application/x-www-form-urlencoded");
        this.http.post<TokenResponse>('/api/o/token/',
            Querystring.stringify({
                "grant_type": "password",
                "username": this.name,
                "password": this.password
            }), {
                responseType: "json",
                headers: headers
            }).subscribe(data => {
                this.token = data;
                localStorage.setItem("token", this.token.access_token);
                }, err => {
                console.log("Error occured.")
            });
    }
}

interface ApplicationInfo {
    name: string;
    client_id: string;
    client_secret: string;
}

interface TokenResponse {
    expires_in: number;
    token_type: string;
    refresh_token: string;
    scope: string;
    access_token: string;
}
