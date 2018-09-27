import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { TableButton } from '../../../shared/interfaces/table-button';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  // public prestations: PrestationModel[];
  public prestations: Observable<PrestationModel[]>;
  private sub: Subscription;
  public headers: string[];
  public tableButton: TableButton;

  constructor(private prestationService: PrestationService) {}

  ngOnInit(): void {
    this.prestations = this.prestationService.collection;
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
}
