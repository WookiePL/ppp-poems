import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {AuthService} from "../shared/services/auth.service";


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})

export class LoginComponent implements OnInit{
    constructor(public router: Router, private _authService: AuthService) {
    }
    name: string;
    password: string;
    private errorMessage: string;

    ngOnInit(): void {
        this._authService.getAndSaveApplicationInfo();
    }

    login() {
        this._authService.login(this.name, this.password)
            .subscribe(data => {
                this._authService.onLoggedIn(data, this.name);
                this.router.navigate(['/poems']);
            }, err => {
                error => this.errorMessage = <any> error;
                console.log("Error occured.")
            });
    }
}


