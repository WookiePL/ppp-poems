import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {PoemService} from "../poem.service";
import {OnClickEvent, OnRatingChangeEven} from "angular-star-rating";
import {IRate} from "../rate";

export interface RatingChangedEvent {
    rate: IRate;
}

@Component({
    selector: 'app-poem-rate-dialog',
    templateUrl: './poem-rate-dialog.component.html',
    styleUrls: ['./poem-rate-dialog.component.scss']
})
export class PoemRateDialogComponent implements OnInit {
    rating: number;
    closeResult: string;
    action: any;

    constructor(private modalService: NgbModal, private poemService:PoemService) {
    }

    @Input() user: string;
    @Input() poem_id: number;
    @Input() updateOnly: boolean;
    @Input() rateId: number;
    @Output() stateChanged: EventEmitter<RatingChangedEvent> = new EventEmitter<RatingChangedEvent>();

    ngOnInit() {
    }

    open(content) {
        this.rating = 0;
        this.modalService.open(content, {size: "sm"}).result.then((result) => {
            if(result === 'Rate! click' && this.rating !== 0){
                console.log(this.rating);
                this.poemService.ratePoem(this.poem_id, this.user, this.rating, this.updateOnly, this.rateId).subscribe(
                    data=> this.stateChanged.emit({rate: data}));
            }
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


    ratingClicked($event: OnRatingChangeEven) {
        this.rating = $event.rating;
    }
}
