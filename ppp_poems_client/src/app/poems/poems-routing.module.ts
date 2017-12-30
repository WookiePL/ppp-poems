import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemsComponent } from './poems.component';
import {PoemsListComponent} from "./poems-list/poems-list.component";
import {PoemsPagedListComponent} from "./poems-paged-list/poems-paged-list.component";

const routes: Routes = [
    {
        path: '',
        component: PoemsComponent,
        children: [

            { path: 'poems-list', component: PoemsListComponent },
            { path: 'poems', component: PoemsPagedListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoemsRoutingModule {}
