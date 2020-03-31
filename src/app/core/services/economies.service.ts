import {Injectable} from '@angular/core';
import { Economy } from '../models/economy';

@Injectable()
export class EconomiesService {

  getAll(): Economy[] {
    const economys: Array<Economy> = [
      {
        name: 'C#',
        valueInPercentage: 90
      },
      {
        name: 'ASP.net Core',
        valueInPercentage: 80
      },
      {
        name: 'Git',
        valueInPercentage: 80
      },
      {
        name: 'ASP.net MVC 5',
        valueInPercentage: 70
      },
      {
        name: 'HTML',
        valueInPercentage: 60
      },
      {
        name: 'CSS',
        valueInPercentage: 60
      },
      {
        name: 'Javascript',
        valueInPercentage: 60
      },
      {
        name: 'Angular',
        valueInPercentage: 60
      },
      {
        name: 'Typescript',
        valueInPercentage: 50
      },
      {
        name: 'Sql',
        valueInPercentage: 50
      },
      {
        name: 'Batch',
        valueInPercentage: 50
      },
      {
        name: 'RabbitMQ',
        valueInPercentage: 40
      },
      {
        name: 'Python',
        valueInPercentage: 20
      },
      {
        name: 'Java',
        valueInPercentage: 20
      },
      {
        name: 'Matlab',
        valueInPercentage: 20
      },
      {
        name: 'Docker',
        valueInPercentage: 10
      }
    ];
    return economys;
  }
}
