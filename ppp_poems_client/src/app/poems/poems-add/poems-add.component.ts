import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {PoemService} from "../poem.service";
import {IAuthor} from "../poem";

@Component({
    selector: 'app-poems-add',
    templateUrl: './poems-add.component.html',
    styleUrls: ['./poems-add.component.scss']
})
export class PoemsAddComponent implements OnInit {
    authors: IAuthor[] = [];
    private errorMessage: string;

    constructor(private router: Router, private poemService: PoemService) {
    }

    ngOnInit() {
        this.poemService.getAuthors()
            .subscribe(authors => {
                this.authors = authors;
            }, error => this.errorMessage = <any> error);
    }

    addPoem(title: string, description: string, content: string, author: string) {
        console.log('author as string: ' + author);
        let authorId = author.split(".")[0];
        console.log('authorId :' + authorId);

        this.poemService.addPoem("string", title, description, content, parseInt(authorId)).subscribe(poem => {
            this.router.navigate(['/poems']);
        });
    }

    getAuthors

}
