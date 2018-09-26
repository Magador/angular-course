import {
  Directive,
  HostBinding,
  Input,
  OnInit,
  OnChanges
} from '@angular/core';
import { PrestationState } from '../enums/prestation-state.enum';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @HostBinding('class')
  state: string;

  @Input()
  appState: PrestationState;

  constructor() {}

  ngOnChanges() {
    this.state = `state-${this.appState.toLowerCase()}`;
  }
}
