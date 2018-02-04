import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user.component';
import {UserService} from "./user.service";
import {UserResolverService} from "./user-resolver.service";
import {PageHeaderModule} from "../shared";
import {UserRoutingModule} from "./user-routing.module";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule} from "@ngx-translate/core";

@NgModule({
    imports: [
        CommonModule,
        PageHeaderModule,
        TranslateModule,
        UserRoutingModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [UserProfileComponent, UserComponent],
    providers: [UserService, UserResolverService]
})
export class UserModule {
}
