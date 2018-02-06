import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PoemsListComponent} from './poems-list/poems-list.component';
import {PoemsComponent} from './poems.component';
import {HeaderComponent} from "../layout/components/header/header.component";
import {SidebarComponent} from "../layout/components/sidebar/sidebar.component";
import {PoemsRoutingModule} from "./poems-routing.module";
import {TranslateModule} from "@ngx-translate/core";
import {NgbDropdownModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {PageHeaderModule, SharedPipesModule} from "../shared";
import {PoemService} from "./poem.service";
import { PoemsPagedListComponent } from './poems-paged-list/poems-paged-list.component';
import { PoemItemComponent } from './poem-item/poem-item.component';
import {StarRatingModule} from "angular-star-rating";
import { PoemDetailComponent } from './poem-detail/poem-detail.component';
import { PoemRateDialogComponent } from './poem-rate-dialog/poem-rate-dialog.component';
import {PoemDetailResolverService} from "./poem-detail-resolver.service";
import {PoemCommentsResolverService} from "./poem-comments-resolver.service";

@NgModule({
    imports: [
        CommonModule,
        PoemsRoutingModule,
        TranslateModule,
        NgbDropdownModule.forRoot(),
        NgbModule.forRoot(),
        PageHeaderModule,
        StarRatingModule,
        SharedPipesModule,
    ],
    declarations: [
        PoemsListComponent,
        PoemsComponent,
        PoemsPagedListComponent,
        PoemItemComponent,
        SidebarComponent,
        HeaderComponent,
        PoemDetailComponent,
        PoemRateDialogComponent,
    ],
    exports: [
        SidebarComponent,
        HeaderComponent
    ],
    providers: [
        PoemService,
        PoemDetailResolverService,
        PoemCommentsResolverService
    ]
})
export class PoemsModule {
}
