import { OnInit, Component } from '@angular/core';
import { Economy } from 'src/app/core/models/economy';
import { EconomiesService } from 'src/app/core/services/economies.service';

@Component({
  selector: 'app-economy',
  styleUrls: ['./economies.component.scss'],
  templateUrl: './economies.component.html',
  providers: [EconomiesService]

})

export class EconomiesComponent implements OnInit {
  economys: Economy[];

  constructor(
    private economysService: EconomiesService) { }

  ngOnInit() {
    this.economys = this.economysService.getAll();
  }
}
