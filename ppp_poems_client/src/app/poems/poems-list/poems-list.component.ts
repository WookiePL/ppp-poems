import {Component, OnInit} from '@angular/core';
import {IComment, IPoem} from "../poem";
import {PoemService} from "../poem.service";

@Component({
    selector: 'app-poems-list',
    templateUrl: './poems-list.component.html',
    styleUrls: ['./poems-list.component.scss']
})
export class PoemsListComponent implements OnInit {

    poems: IPoem[] = [];
    private errorMessage: string;
    private opinionComment : IComment;

    constructor(private _poemService: PoemService) {
    }

    ngOnInit() {
        this._poemService.getPoems()
            .subscribe(poems => {
                this.poems = poems;

            },
                error => this.errorMessage = <any> error);
    }

    editPoem(poemId: number) {
        console.log("Edit poem: " + poemId);
    }

    deletePoem(poemId: number) {
        console.log("Delete poem: " + poemId);
    }

}
