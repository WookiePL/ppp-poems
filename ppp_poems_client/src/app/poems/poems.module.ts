import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoemsListComponent} from './poems-list/poems-list.component';
import {PoemsComponent} from './poems.component';
import {HeaderComponent} from "../layout/components/header/header.component";
import {SidebarComponent} from "../layout/components/sidebar/sidebar.component";
import {PoemsRoutingModule} from "./poems-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgbDropdownModule} from "@ng-bootstrap/ng-bootstrap";
import {PageHeaderModule} from "../shared";
import {PoemService} from "./poem.service";

@NgModule({
    imports: [
        CommonModule,
        PoemsRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        PageHeaderModule
    ],
    declarations: [
        PoemsListComponent,
        PoemsComponent,
        SidebarComponent,
        HeaderComponent
    ],
    providers: [
        PoemService
    ]
})
export class PoemsModule {
}
