import {Injectable} from '@angular/core';
import { Economy } from '../models/economy';

@Injectable()
export class EconomiesService {

  getAll(): Economy[] {
    const economys: Array<Economy> = [
    ];
    return economys;
  }
}
