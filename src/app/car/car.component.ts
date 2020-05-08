import { Component, OnInit, Input } from '@angular/core';
import { ICar } from '../interfaces/car';
import { CarsApiService } from '../services/cars-api.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarsApiService]
})
export class CarComponent implements OnInit {
  @Input() carData:ICar;
  carImageWidth:number = 300;

  constructor(private _carAPIService:CarsApiService) {}

  ngOnInit() {
  }
  
  deleteCar(carId:string){
    this._carAPIService.delCarData(carId);
    this._carAPIService.carsDataCollection.doc(carId).delete();
  }
}
