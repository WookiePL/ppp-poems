import { Component, OnInit } from '@angular/core';
import {PoemService} from "../poem.service";
import {IPoem} from "../poem";

@Component({
  selector: 'app-poems-paged-list',
  templateUrl: './poems-paged-list.component.html',
  styleUrls: ['./poems-paged-list.component.scss']
})
export class PoemsPagedListComponent implements OnInit {

    poems: IPoem[] = [];
    private errorMessage: string;

    constructor(private _poemService: PoemService) {
    }

    ngOnInit() {
        this._poemService.getPoems()
            .subscribe(poems => {
                    this.poems = poems;

                },
                error => this.errorMessage = <any> error);
    }

}
