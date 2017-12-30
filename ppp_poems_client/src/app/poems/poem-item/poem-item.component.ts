import {Component, Input, OnInit} from '@angular/core';
import {IPoem} from "../poem";

@Component({
  selector: 'app-poem-item',
  templateUrl: './poem-item.component.html',
  styleUrls: ['./poem-item.component.scss']
})
export class PoemItemComponent implements OnInit {
  constructor() { }

  @Input() poem: IPoem;

  ngOnInit() {
  }

}
