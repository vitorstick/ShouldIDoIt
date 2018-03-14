import { Injectable, Inject } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable, Subject } from "rxjs/Rx";

import { Dilema } from "./dilema";
import { AngularFireDatabase, FirebaseRef } from "angularfire2";
import { firebaseConfig } from "../environments/firebase.config";



@Injectable()
export class SearchService {
    sdkDb: any;

    constructor(private db: AngularFireDatabase, @Inject(FirebaseRef) fb,
        private http: Http) {

        this.sdkDb = fb.database().ref();

    }

    createDilema(dilema: Dilema): Observable<any> {

        // const lessonToSave = Object.assign({}, dilema, { courseId });

        const newLessonKey = this.sdkDb.child('dilema').push().key;

        let dataToSave = {};

        // dataToSave["lessons/" + newLessonKey] = lessonToSave;
        // dataToSave[`lessonsPerCourse/${courseId}/${newLessonKey}`] = true;


        return this.firebaseUpdate(dataToSave);
    }

    firebaseUpdate(dataToSave) {
        const subject = new Subject();

        this.sdkDb.update(dataToSave)
            .then(
            val => {
                subject.next(val);
                subject.complete();

            },
            err => {
                subject.error(err);
                subject.complete();
            }
            );

        return subject.asObservable();
    }
}