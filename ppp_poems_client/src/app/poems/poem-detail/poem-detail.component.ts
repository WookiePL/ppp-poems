import {Component, OnInit} from '@angular/core';
import {IPoem, IComment} from "../poem";
import {AuthService} from "../../shared/services/auth.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, RouterStateSnapshot} from "@angular/router";
import {isUndefined} from "util";
import {RatingChangedEvent} from "../poem-rate-dialog/poem-rate-dialog.component";
import {PoemService} from "../poem.service";

@Component({
    selector: 'app-poem-detail',
    templateUrl: './poem-detail.component.html',
    styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {

    rated: boolean = false;
    rating: number;
    comments: Array<IComment>;
    public poem: IPoem;
    public userRating: number;
    public update: boolean = false;
    public rateId: number;
    private userRate;

    constructor(private route: ActivatedRoute, private authService: AuthService, private poemService: PoemService) {

    }

    isLoggedIn() {
        return this.authService.isLoggedIn();
    }

    getUser() {
        return this.authService.getUser();
    }

    findUserRating() {
        if (!isUndefined(this.poem.rate_set)) {
            this.userRate = this.poem.rate_set.find(rt => rt.user.username === this.getUser());

            if (this.userRate) {
                this.userRating = this.userRate.rating;
                this.rateId = this.userRate.id;
                console.log(this.rateId);
                this.rated = true;
                this.update = true;
                console.log(this.update);
            }
        }
    }

    ngOnInit() {
        this.poem = this.route.snapshot.data['poem'];
        this.comments = this.route.snapshot.data['comments'];
        console.log(this.poem.rate_set);

        this.findUserRating();
    }

    submitComment(username: string, content: string) {
        console.log('comment submited! username: ' + username + ', content: ' + content);
        this.poemService.submitComment(username, content, this.poem.id).subscribe(
            (res) => {
                this.poemService.getComments(this.poem.id).subscribe(
                    (res) => this.comments = res
                );
            }
        );
    }

    refreshData($event: RatingChangedEvent) {
        this.poemService.getPoem(this.poem.id).subscribe(
            (res) => this.poem = res,
            err => console.log(err),
            () => this.findUserRating()
        );

    }
}

