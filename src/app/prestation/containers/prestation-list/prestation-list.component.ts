import { Component, OnInit } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { PrestationState } from '../../../shared/enums/prestation-state.enum';

@Component({
  selector: 'app-prestation-list',
  templateUrl: './prestation-list.component.html',
  styleUrls: ['./prestation-list.component.scss']
})
export class PrestationListComponent implements OnInit {
  public prestations: PrestationModel[];
  public prestationStates = Object.values(PrestationState);

  constructor(prestationService: PrestationService) {
    this.prestations = prestationService.collection;
  }

  ngOnInit() {}
}
