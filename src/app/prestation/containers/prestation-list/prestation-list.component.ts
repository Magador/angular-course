import { Component, OnInit } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  public prestations: PrestationModel[];
  public headers: string[];

  constructor(prestationService: PrestationService) {
    this.prestations = prestationService.collection;
    this.headers = [
      'Type',
      'Client',
      'Number of days',
      'ADR excl. tax',
      'Excl. tax total',
      'Incl. tax total',
      'State'
    ];
  }

  ngOnInit() {}
}
