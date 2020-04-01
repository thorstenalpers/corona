import { Component, OnInit } from '@angular/core';
import { CoronaApiService } from 'src/app/core/services/coronaApiService';
import { LocationsResponse } from 'src/app/core/models/models';
import { Observable } from 'rxjs';
// import {locations as confirmedMocked} from '../../confirmed.json'; 


@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.scss'],
  providers: [CoronaApiService]
})
export class WorldComponent implements OnInit {

  confirmedByLocation: Array<LocationsResponse>;
  cols: any[];

  constructor(
    private coronaApiService: CoronaApiService) { }

  ngOnInit() {

    const observable = this.coronaApiService.getLocationsV2LocationsGet();

    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'country', header: 'country' },
      { field: 'country_population', header: 'population' } ,
      { field: 'confirmed', header: 'confirmed' } ,
      { field: 'deaths', header: 'deaths' }  ,
      { field: 'recovered', header: 'recovered' } 
    ];

    observable.subscribe(
      response => {
        this.confirmedByLocation = response.locations;
      }
      );
  }
}
