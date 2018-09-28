import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { PrestationModel } from '../../shared/models/prestation.model';
import { PrestationState } from '../../shared/enums/prestation-state.enum';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private prestationCollection: AngularFirestoreCollection<PrestationModel>;
  private _collection$: Observable<PrestationModel[]>;
  public notification$ = new Subject<string>();

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    this.prestationCollection = afs.collection<PrestationModel>('prestations');
    this._collection$ = this.prestationCollection
      .valueChanges()
      .pipe(map(coll => coll.map(item => new PrestationModel(item))));
    // this.http.get<PrestationModel[]>('url/prestation');
  }

  get collection$(): Observable<PrestationModel[]> {
    return this._collection$;
  }

  set collection$(collection: Observable<PrestationModel[]>) {
    this._collection$ = collection;
  }

  public addPrestation(prestation: PrestationModel): any {
    const id = this.afs.createId();
    const p = { id, ...prestation };
    this.prestationCollection
      .doc(id)
      .set(p)
      .catch(e => console.error(e));
    // return this.http.post('urlaspi/prestations/', p);
  }

  public updatePrestation(
    prestation: PrestationModel,
    state?: PrestationState
  ): Promise<any> {
    const p = { ...prestation };
    if (state) {
      p.state = state;
    }
    return this.prestationCollection
      .doc(p.id)
      .update(p)
      .catch(e => console.error(e));
    // this.http.patch(`urlapi/prestations/item.id`, p);
  }

  public deletePrestation(item: PrestationModel): Promise<any> {
    return this.prestationCollection
      .doc(item.id)
      .delete()
      .catch(e => console.error(e));
    // return this.http.delete(`urlapi/prestations/${item.id}`);
  }

  public getPrestation(id: string): Observable<PrestationModel> {
    return this.prestationCollection.doc<PrestationModel>(id).valueChanges();
    // return this.http.get(`urlaspi/prestations/${id}`);
  }
}
