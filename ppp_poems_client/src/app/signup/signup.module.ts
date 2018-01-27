import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SignupRoutingModule} from './signup-routing.module';
import {SignupComponent} from './signup.component';
import {ReactiveFormsModule} from "@angular/forms";
import {UserService} from "../user/user.service";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SignupRoutingModule
    ],
    declarations: [SignupComponent],
    providers: [UserService]
})
export class SignupModule {
}
