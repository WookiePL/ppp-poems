import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {IUserProfile} from "./user-profile";
import {AuthService} from "../shared/services/auth.service";

@Injectable()
export class UserService {

  constructor(private http: HttpClient, private _authService: AuthService) { }

    getCurrentUser(): Observable<IUserProfile> {
        return this.http.get<IUserProfile>('/api/user/' + this._authService.getUser(), {headers: this._authService.getAuthorizationRequestHeader()})
            .do(data => console.log('getUser' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.error(error);
        return Observable.throw(error || 'Server error');
    }
}
