import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from "../../models/User";

@Component({
  selector: 'app-full-user',
  templateUrl: './full-user.component.html',
  styleUrls: ['./full-user.component.css']
})
export class FullUserComponent implements OnInit {

  user: User;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    // console.log(this.router.getCurrentNavigation().extras.state);
    // console.log(history.state);

    this.activatedRoute.params.subscribe(value => {
      console.log('hello');
      this.user = this.router.getCurrentNavigation().extras.state as User;
    });
  }

  ngOnInit(): void {
  }

}
