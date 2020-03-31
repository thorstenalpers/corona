import { Component, Input, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Economy } from 'src/app/core/models/economy';
import * as ProgressBar from 'progressbar.js';

@Component({
  selector: 'app-economy-entry',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.scss'],
})

export class EconomyEntryComponent implements OnInit, AfterViewInit {
  @ViewChild('economyEntryId', { static: false }) progressbarDivElem?: ElementRef<HTMLElement>;

  @Input() economy: Economy;
  currentValue: string;

  constructor() { }

  ngAfterViewInit() {
  }

  ngOnInit(): void {
    this.currentValue = '0%';
  }
}

