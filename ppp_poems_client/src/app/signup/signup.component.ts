import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../user/user.service";
import {Router} from "@angular/router";

function passwordsMatchValidator(c: AbstractControl): {[key:string]:boolean}| null{
    let pass = c.get('password');
    let repeatPass = c.get('password_repeat');
    if (pass.value !== repeatPass.value){
        return {'match':true};
    }
    return null;
}

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    constructor(public router: Router, private formBuilder: FormBuilder, private _userService: UserService) {}
    private errorMessage: string;
    signupForm: FormGroup;
    ngOnInit() {
        this.signupForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_repeat: ['', [Validators.required, Validators.minLength(6)]]
        }, { validator: passwordsMatchValidator})
    }


    signup() {
        console.log(JSON.stringify(this.signupForm.value));
        this._userService.signUp(JSON.stringify(this.signupForm.value)).subscribe(data => {
            this.router.navigate(['/login']);
        },err => {
            error => this.errorMessage = <any> error;
            console.log("Error occured.")
        });
    }
}
