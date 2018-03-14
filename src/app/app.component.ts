import { Component, OnInit } from '@angular/core';
import { MdDialog, MdDialogRef, MdSnackBar } from '@angular/material';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from "angularfire2";

import { Dilema } from "../shared/dilema"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';

  username: string = "";
  userquestion: string = "";
  result: number = 0;

  constructor(private af: AngularFire) {
    // Initialize Firebase
    const dilemas$: FirebaseListObservable<any> = af.database.list('dilemas');

    dilemas$.subscribe(list => {
      console.log(list)
    });
  }

  dilema = new Dilema;

  ngOnInit() {


  }

  decide() {
    let max = 100;
    let min = 1;

    this.result = Math.random() * (max - min) + min;

    this.dilema.name=this.username;
    this.dilema.dilema=this.userquestion;
    this.result > 50 ? this.dilema.response="yes" : this.dilema.response="no";
    // this.dilema.response=this.result.toString();
    this.dilema.liked=true;

    // console.log(this.dilema)

    const items = this.af.database.list('dilemas');

    items.push({ name: this.dilema.name, 
      dilema: this.dilema.dilema, 
      result: this.dilema.response 
    });
    // console.log(this.result, items)
  }

  newDilema() {
    this.result = 0;
    // console.log("result", this.result)
  }
}
