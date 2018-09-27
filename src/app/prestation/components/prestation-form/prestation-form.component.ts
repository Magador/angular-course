import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PrestationState } from '../../../shared/enums/prestation-state.enum';
import { PrestationModel } from '../../../shared/models/prestation.model';

@Component({
  selector: 'app-prestation-form',
  templateUrl: './prestation-form.component.html',
  styleUrls: ['./prestation-form.component.scss']
})
export class PrestationFormComponent implements OnInit {
  public states = Object.values(PrestationState);
  public prestation: PrestationModel;

  @Output()
  public submit = new EventEmitter<PrestationModel>();

  constructor() {}

  ngOnInit() {
    this.prestation = new PrestationModel();
  }

  public onSubmit(): void {
    this.submit.emit(this.prestation);
  }
}
