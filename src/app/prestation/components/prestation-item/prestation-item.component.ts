import { Component, OnInit, Input } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationState } from '../../../shared/enums/prestation-state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-prestation-item]',
  templateUrl: './prestation-item.component.html',
  styleUrls: ['./prestation-item.component.scss']
})
export class PrestationItemComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('app-prestation-item')
  public prestation: PrestationModel;
  public prestationStates = Object.values(PrestationState);

  constructor(private prestationService: PrestationService) {}

  ngOnInit() {}

  public onChangeState(e) {
    this.prestationService.updatePrestationState(
      this.prestation,
      e.target.value
    );
  }
}
