import {Component, OnInit} from '@angular/core';
import {ModalDismissReasons, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
    selector: 'app-poem-rate-dialog',
    templateUrl: './poem-rate-dialog.component.html',
    styleUrls: ['./poem-rate-dialog.component.scss']
})
export class PoemRateDialogComponent implements OnInit {
    closeResult: string;
    action: any;

    constructor(private modalService: NgbModal) {
    }

    ngOnInit() {
    }

    open(content) {
        this.modalService.open(content, {size: "sm"}).result.then((result) => {
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
}
