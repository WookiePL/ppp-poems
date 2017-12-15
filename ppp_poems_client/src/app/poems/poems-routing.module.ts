import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PoemsComponent } from './poems.component';
import {PoemsListComponent} from "./poems-list/poems-list.component";

const routes: Routes = [
    {
        path: '',
        component: PoemsComponent,
        children: [

            { path: 'poems-list', component: PoemsListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PoemsRoutingModule {}
