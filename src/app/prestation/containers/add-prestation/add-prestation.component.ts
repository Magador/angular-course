import { Component, OnInit } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) {}

  ngOnInit() {}

  add(prestation: PrestationModel): void {
    this.prestationService.addPrestation(prestation);
    // this.prestationService.addPrestation(prestation).subscribe();
    this.router.navigate(['prestation']);
  }
}
