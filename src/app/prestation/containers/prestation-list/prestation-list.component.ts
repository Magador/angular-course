import { Component, OnInit } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TableButton } from '../../../shared/interfaces/table-button';

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  public prestations: PrestationModel[];
  public headers: string[];
  public tableButton: TableButton;

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
    this.tableButton = {
      route: 'add',
      icon: faPlusCircle,
      label: 'Add prestation'
    };
  }

  ngOnInit() {}
}
