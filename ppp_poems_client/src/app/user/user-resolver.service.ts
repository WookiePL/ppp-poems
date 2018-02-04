import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from "@angular/router";
import {IUserProfile} from "./user-profile";
import {UserService} from "./user.service";

@Injectable()
export class UserResolverService implements Resolve<IUserProfile>{

    constructor(private _userService: UserService, private _router: Router) {
    }
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUserProfile> | Promise<IUserProfile> | IUserProfile {
        return this._userService.getCurrentUser()
            .map(user => {
                if (user){
                    console.log(user);
                    return user;
                }
            })
            .catch(error => {
                console.log(`Retrieval error: ${error.message}`);
                if(error.status === 401){
                    this._router.navigate(['/login']);
                }
                this._router.navigate(['/login']);
                return Observable.of(null);
            })
    }

}
