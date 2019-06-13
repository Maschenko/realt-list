import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Department} from '../models/sub';

@Injectable({
  providedIn: 'root'
})
export class SubService {

  realtCollection: AngularFirestoreCollection<Department>;
  departmentItems: Observable<Department[]>;
  itemDoc: AngularFirestoreDocument<Department>;

  constructor(public afs: AngularFirestore) {
    // this.items = this.afs.collection('items').valueChanges();

    this.realtCollection = this.afs.collection('subdivision', ref => ref.orderBy('name', 'asc'));

    this.departmentItems = this.realtCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Department;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }
  getItems() {
    return this.departmentItems;
  }

  addItem(item: Department) {
    this.realtCollection.add(item);
  }

  deleteItem(item: Department) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Department) {
    this.itemDoc = this.afs.doc(`items/${item.id}`);
    this.itemDoc.update(item);
  }
}
