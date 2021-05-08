import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentSnapshot } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Detail, UserJ } from './detail';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  private dbPath = '/stoires';
  storiesRef: AngularFirestoreCollection<UserJ>;

  constructor(private firestore: AngularFirestore) {
    this.storiesRef = firestore.collection(this.dbPath);
   }

  getPolicies(): AngularFirestoreCollection<UserJ> {
    return this.storiesRef;
  }

  // createPolicy(policy: Detail){
  //   return this.firestore.collection('stories').add(policy);
  // }
  getOne(id: string): Observable<UserJ> {
    const doc = this.firestore.doc<UserJ>('/stoires/'+id);
    return doc.snapshotChanges().pipe(
      map(data => {
        return {id: data.payload.id, ...data.payload.data()} as UserJ;
      }
      ),take(1)
    );
  } 

  updatePolicy(id: string, policy: any) : Promise<void>{
    return this.storiesRef.doc(id).update(policy);
  }

  deletePolicy(id: string){
    return this.storiesRef.doc(id).delete();
  }
}
