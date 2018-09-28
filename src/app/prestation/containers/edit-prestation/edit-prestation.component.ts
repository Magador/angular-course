import { Component, OnInit } from '@angular/core';
import { PrestationModel } from '../../../shared/models/prestation.model';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  public prestation: PrestationModel;

  constructor(
    private prestationService: PrestationService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.data.subscribe(
      (data: { prestation: PrestationModel }) =>
        (this.prestation = data.prestation)
    );
  }

  public edit(prestation: PrestationModel) {
    this.prestationService.updatePrestation(prestation);
    this.router.navigate(['prestation']);
  }
}
