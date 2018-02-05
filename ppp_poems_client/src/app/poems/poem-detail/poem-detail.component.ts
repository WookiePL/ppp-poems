import {Component, OnInit} from '@angular/core';
import {IPoem, IComment} from "../poem";
import {PoemService} from "../poem.service";
import {ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";

@Component({
    selector: 'app-poem-detail',
    templateUrl: './poem-detail.component.html',
    styleUrls: ['./poem-detail.component.scss']
})
export class PoemDetailComponent implements OnInit {

    rated :boolean;
    rating: number;
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
    constructor(private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.rated = false;
        this.poem = this.route.snapshot.data['poem'];

        //TODO: remove mock, use real data
        this.poem.comments = [{
          author: 'Janusz Pawlacz',
          id: 10001,
          content: 'Elo, ziom co to pisał to chyba jakiś nayebany był!',
          date: '2018-01-01 21:37'
        }, {
          author: 'Janusz Biznesu',
          id: 10002,
          content: 'Dla mnie spoko, 11/9. Pozdrawiam cieplutko!',
          date: '2018-01-01 22:13'
        }, {
          author: 'Janusz Cebulla',
          id: 10003,
          content: 'Eh, coraz więcej amatorów pcha się do zabawy... mam nadzieję, że wejdzie ta ustawa i wiersze pisać będzie można tylko z licencją, bo niektórym to brak RIGCZU',
          date: '2018-01-01 23:59'
        }];
    }

    rate() {
        console.log("rate");
        this.rated = true;
    }

}
