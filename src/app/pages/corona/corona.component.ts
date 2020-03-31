import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-corona',
  templateUrl: './corona.component.html',
  styleUrls: ['./corona.component.scss']
})
export class CoronaComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

  }
}
