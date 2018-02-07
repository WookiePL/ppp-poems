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

  addPoem(title: string, description: string, content: string) {



      this.poemService.addPoem("string", title, description, content, 1).subscribe(poem => {
          this.router.navigate(['/poems']);
      });
  }

}
