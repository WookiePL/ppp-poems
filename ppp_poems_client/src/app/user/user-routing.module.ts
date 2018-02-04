import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UserProfileComponent} from "./user-profile/user-profile.component";
import {UserResolverService} from "./user-resolver.service";
import {UserComponent} from "./user.component";
import {AuthGuard} from "../shared/guard";

const routes: Routes = [
    {
        path: '',
        component: UserComponent,
        children: [
            {
                path: 'profile',
                component: UserProfileComponent,
                canActivate: [AuthGuard],
                resolve: {userProfile: UserResolverService}
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule {
}
