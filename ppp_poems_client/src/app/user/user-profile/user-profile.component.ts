import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {IUserProfile} from "../user-profile";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public user: IUserProfile;
  ngOnInit() {
      this.user = this.route.snapshot.data['userProfile'];
  }

}
