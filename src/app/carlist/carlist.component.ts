import { Component, OnInit } from '@angular/core';
import { CarsApiService } from '../services/cars-api.service';
import { ICar, Car } from '../interfaces/car';
import { IcuPlaceholder } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-carlist',
  templateUrl: './carlist.component.html',
  styleUrls: ['./carlist.component.css'],
  providers: [CarsApiService]
})
export class CarlistComponent implements OnInit {
  carsData: ICar[];
  show:boolean;

  constructor(private _carAPIService:CarsApiService) { }

  ngOnInit() {
    this._carAPIService.getCarData().subscribe(carsData => 
      { this.carsData = carsData});
  }
  addTheCar(make:string, model:string, year:string, imageURL:string):boolean{
    let tempCar:ICar;
    tempCar = new Car(make, model, year, imageURL);
    this._carAPIService.addCarData(tempCar);
    return false;
  }
}
