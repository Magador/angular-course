import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PrestationState } from '../../../shared/enums/prestation-state.enum';
import { PrestationModel } from '../../../shared/models/prestation.model';

@Component({
  selector: 'app-prestation-form-reactive',
  templateUrl: './prestation-form-reactive.component.html',
  styleUrls: ['./prestation-form-reactive.component.scss']
})
export class PrestationFormReactiveComponent implements OnInit {
  public states = Object.values(PrestationState);
  public form: FormGroup;

  @Input()
  public prestation = new PrestationModel();

  @Output()
  public submit = new EventEmitter<PrestationModel>();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      type: [this.prestation.type, Validators.required],
      client: [
        this.prestation.client,
        Validators.compose([Validators.required, Validators.minLength(2)])
      ],
      numberOfDays: [this.prestation.numberOfDays, Validators.min(1)],
      vatRate: [this.prestation.vatRate, Validators.min(0)],
      exclTaxADR: [this.prestation.exclTaxADR, Validators.min(0)],
      state: [this.prestation.state]
    });
  }

  public mustShowErrorMessage(formControlName: string): boolean {
    const formControl = this.form.get(formControlName);
    return formControl.invalid && formControl.touched;
  }

  public onSubmit(): void {
    this.submit.emit(Object.assign(this.prestation, this.form.value));
  }
}
