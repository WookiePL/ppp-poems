import {Component, OnInit} from '@angular/core';
import {IPoem, IComment} from "../poem";
import {PoemService} from "../poem.service";
import {ActivatedRoute, ActivatedRouteSnapshot, Params, RouterStateSnapshot} from "@angular/router";

@Component({
    selector: 'app-poem-detail',
    templateUrl: './poem-detail.component.html',
    styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {

    rated :boolean;
    rating: number;
    comments: Array<IComment>;
    public poem: IPoem;
    // public poem = {
    //     content: "I w Ostrej świecisz Bramie! Ty, co gród zamkowy\n" +
    //     "Nowogródzki ochraniasz z jego wiernym ludem!\n" +
    //     "Jak mnie dziecko do zdrowia powróciłaś cudem\n" +
    //     "(— Gdy od płaczącej matki, pod Twoją opiekę\n" +
    //     "Ofiarowany martwą podniosłem powiekę;\n" +
    //     "I zaraz mogłem pieszo, do Twych świątyń progu",
    //     description:"example",
    //     creation_time: new Date().toDateString(),
    //     rating : 4.5,
    //     author : 1,
    //     id: 10,
    //     title: "Inwokacja",
    //     user: {
    //         username: "maciek"
    //     }
    // };
    constructor(private route: ActivatedRoute, private poemService: PoemService) {

    }

    ngOnInit() {
        this.rated = false;
        this.poem = this.route.snapshot.data['poem'];
        this.comments = this.route.snapshot.data['comments'];
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

    rate() {
        console.log("rate");
        this.rated = true;
    }

}
