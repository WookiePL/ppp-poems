import { Injectable } from '@angular/core';
import * as Querystring from "querystring";
import {IToken} from "../token";
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {IApplicationInfo} from "../applicationInfo";

@Injectable()
export class AuthService {
    private applicationInfo: IApplicationInfo;
    private errorMessage: string;
    private token: IToken;

    constructor(private http: HttpClient) {
        this.initialize();
    }

    private initialize(): void {
        this.getAndSaveApplicationInfo();
        this.getTokenFromLocalStorage();

    }

    private getAndSaveApplicationInfo() {
        this.getApplication()
            .subscribe(data => {
                this.applicationInfo = data[0];
                console.log(this.applicationInfo.client_id);
                console.log(this.applicationInfo.client_secret);
            }, err => {
                this.errorMessage = <any> err;
                console.log("Error occured.");
            });
    }

    private getTokenFromLocalStorage() {
        let tokenJson = localStorage.getItem('token');
        console.log("Token is: " + tokenJson);
        try {
            if (tokenJson) {
                this.token = JSON.parse(tokenJson);
            }else{
                console.log("No token available in local storage");
            }
        }catch (ex){
            console.log("No token available in local storage");
            this.token = null;
        }
    }

    getApplication(): Observable<IApplicationInfo[]> {
        return this.http.get<IApplicationInfo[]>('/api/application/ppp_app/')
            .do(data => console.log('getApplication' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    login(userName: string, password: string){
        let clientString = btoa(this.applicationInfo.client_id + ":" + this.applicationInfo.client_secret);
        let headers = new HttpHeaders()
            .set("Authorization", "Basic " + clientString)
            .set("Content-Type", "application/x-www-form-urlencoded");
        return this.http.post<IToken>('/api/o/token/',
            Querystring.stringify({
                "grant_type": "password",
                "username": userName,
                "password": password
            }), {
                responseType: "json",
                headers: headers
            })
            .do(data => console.log('getToken' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    onLoggedIn(token: IToken, userName: string){
        this.token = token;
        this.token.user = userName;
        this.storeToken(token);
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        return Observable.throw(error.message || 'Server error');
    }

    isLoggedIn(): boolean{
        if(this.token && this.token.access_token){
            return true;
        }else {
            return false;
        }
    }

    private storeToken(token: IToken) {
        localStorage.setItem("token", JSON.stringify(token))
    }

    getAccessToken(){
        return this.token.access_token;
    }

    getUser(){
        return this.token.user;
    }

}
