import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthService} from "../shared/services/auth.service";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        AuthService
    ]
})
export class UserModule {
}
