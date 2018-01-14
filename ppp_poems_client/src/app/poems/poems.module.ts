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
import { PoemsPagedListComponent } from './poems-paged-list/poems-paged-list.component';
import { PoemItemComponent } from './poem-item/poem-item.component';
import {StarRatingModule} from "angular-star-rating";

@NgModule({
    imports: [
        CommonModule,
        PoemsRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        PageHeaderModule,
        StarRatingModule
    ],
    declarations: [
        PoemsListComponent,
        PoemsComponent,
        PoemsPagedListComponent,
        PoemItemComponent,
        SidebarComponent,
        HeaderComponent
    ],
    exports: [
        SidebarComponent,
        HeaderComponent
    ],
    providers: [
        PoemService
    ]
})
export class PoemsModule {
}
