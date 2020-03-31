import { OnInit, Component } from '@angular/core';
import { Economy } from 'src/app/core/models/economy';
import { EconomiesService } from 'src/app/core/services/economies.service';
import { CoronaApiService } from 'src/app/core/services/coronaApiService';
import { LocationsResponse } from 'src/app/core/models/models';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-economy',
  styleUrls: ['./economies.component.scss'],
  templateUrl: './economies.component.html',
  providers: [EconomiesService, CoronaApiService]
})

export class EconomiesComponent implements OnInit {
  economies: Economy[];
  coronas: Observable<LocationsResponse>;

  constructor(
    private economysService: EconomiesService,
    private coronaApiService: CoronaApiService) { }

  ngOnInit() {
  
    this.coronas = this.coronaApiService.getLocationsV2LocationsGet();

    this.coronas.subscribe(
      response => {
        console.log('Observer got a complete notification' + response);
        let foo = "";
      }
      );

    this.economies = this.economysService.getAll();
  }
}
