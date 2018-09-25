import { Component, OnInit } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  private collection: PrestationModel[];
  constructor() {}

  ngOnInit() {}
}
