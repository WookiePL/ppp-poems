import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PoemService} from "../poem.service";

@Component({
  selector: 'app-poems-add',
  templateUrl: './poems-add.component.html',
  styleUrls: ['./poems-add.component.scss']
})
export class PoemsAddComponent implements OnInit {

  constructor(private router: Router, private poemService:PoemService) { }

  ngOnInit() {
  }

  addPoem(formValues) {
      this.poemService.addPoem(formValues).subscribe(poem => {
          this.router.navigate(['/poems']);
      });
  }

}
