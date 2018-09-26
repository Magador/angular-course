import { Component, OnInit, Input } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationState } from '../../../shared/enums/prestation-state.enum';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-prestation-item]',
  templateUrl: './prestation-item.component.html',
  styleUrls: ['./prestation-item.component.scss']
})
export class PrestationItemComponent implements OnInit {
  @Input()
  public prestation: PrestationModel;
  public prestationStates = Object.values(PrestationState);

  constructor() {}

  ngOnInit() {}
}
