import { Component, OnInit } from '@angular/core';
import { Detail } from '../detail';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.detail = history.state.data;
  }

  detail: Detail;

}
