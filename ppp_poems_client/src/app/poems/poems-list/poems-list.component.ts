import {Component, OnInit} from '@angular/core';
import {IPoem} from "../poem";
import {PoemService} from "../poem.service";

@Component({
    templateUrl: './poems-list.component.html',
    styleUrls: ['./poems-list.component.scss']
})
export class PoemsListComponent implements OnInit {

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
