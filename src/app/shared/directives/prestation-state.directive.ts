import {
  Directive,
  HostBinding,
  Input,
  OnInit,
  OnChanges
} from '@angular/core';
import { PrestationState } from '../enums/prestation-state.enum';

@Directive({
  selector: '[appPrestationState]'
})
export class PrestationStateDirective implements OnChanges {
  @HostBinding('class')
  state: string;

  @Input()
  appPrestationState: PrestationState;

  constructor() {}

  ngOnChanges() {
    this.state = `state-${this.appPrestationState.toLowerCase()}`;
  }
}
