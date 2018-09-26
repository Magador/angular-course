import { Directive, OnChanges, HostBinding, Input } from '@angular/core';
import { ClientState } from '../enums/client-state.enum';

@Directive({
  selector: '[appClientState]'
})
export class ClientStateDirective implements OnChanges {
  @HostBinding('class')
  state: string;

  @Input()
  appClientState: ClientState;

  constructor() {}

  ngOnChanges() {
    this.state = `state-${this.appClientState.toLowerCase()}`;
  }
}
