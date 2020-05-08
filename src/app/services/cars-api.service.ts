import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { catchError, tap, filter } from 'rxjs/operators';

import { AngularFirestoreCollection, AngularFirestore } from "@angular/fire/firestore";

import { ICar, Car } from '../interfaces/car';

@Injectable()

export class CarsApiService {

  ///service wrapper around the native firestores SDK's
  //CollectionReference and query types
  carsDataCollection: AngularFirestoreCollection<ICar>;

  //representation of any set of cars over any amount of time
  carsData:Observable<ICar[]>;

  //array to hold all the cars
  allCarsData: ICar[];

  errorMessage: string;

  constructor(private _http: HttpClient, private _afs: AngularFirestore) {
    //connect to the database
    this.carsDataCollection = _afs.collection<ICar>("cars_data");
  }
  getCarData(): Observable<ICar[]> {
    this.carsData = this.carsDataCollection.valueChanges({idField:"id"});
    this.carsData.subscribe(data => console.log("getCarsData:" + JSON.stringify(data)));
    return this.carsData;
  }
  addCarData(car: ICar): void {
    this.carsDataCollection.add(JSON.parse(JSON.stringify(car)));
  }
  delCarData(carID: string): void {

  }

  private handleError(err: HttpErrorResponse) {
    console.log('CarApiService: ' + err.message);
    return Observable.throw(err.message);
  }
}
