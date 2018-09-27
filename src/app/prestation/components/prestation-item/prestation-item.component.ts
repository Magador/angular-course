import { Component, OnInit, Input } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationState } from '../../../shared/enums/prestation-state.enum';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: '[app-prestation-item], app-prestation-item',
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
    const state = e.target.value;
    this.prestationService
      .updatePrestation(this.prestation, state)
      .then(item => (this.prestation.state = state));
  }
}
