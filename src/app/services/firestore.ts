import { inject, Injectable } from "@angular/core";
import { addDoc, collection, collectionData, CollectionReference, deleteDoc, doc, Firestore as FirebaseFirestore, getDoc, updateDoc } from "@angular/fire/firestore";
import { Transaction } from "../models/transaction";
import { from, map, Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class Firestore {
  private firestore = inject(FirebaseFirestore);
  private readonly collectionRef = collection(this.firestore, 'transactions');
  private readonly docRef = (id: string) => doc(this.firestore, 'transactions', id);
  /**
   * Maps Firestore data, converting any Timestamp properties to Date.
   * Recursively checks all properties.
   */


  getAll(): Observable<Transaction[]> {
    return collectionData(this.collectionRef, { idField: 'id' }).pipe(
      tap(console.log),
      map((transactions: any[]) => transactions
        .map(this.mapFirestoreData<Transaction>)
        .sort((a, b) => a.dateLimit.getTime() - b.dateLimit.getTime())
      ),
      tap(console.log)
    );
  }

  get(id: string): Observable<any> {
    return from(getDoc(this.docRef(id))).pipe(
      tap(console.log),
      map(doc => doc.exists() ? this.mapFirestoreData(doc.data()) : null)
    );
  }

  create(transaction: Transaction): Promise<any> {
    const { id, ...props } = transaction;
    return addDoc(this.collectionRef, { ...props });
  }

  update(transaction: Transaction): Promise<any> {
    const { id, ...props } = transaction;
    return updateDoc(this.docRef(id), { ...props });
  }

  deleteBet(id: string): Promise<void> {
    return deleteDoc(this.docRef(id));
  }

  private mapFirestoreData<T>(data: any): T {
    if (data == null || typeof data !== 'object') return data;
    const mapped: any = Array.isArray(data) ? [] : {};
    for (const key in data) {
      if (!Object.prototype.hasOwnProperty.call(data, key)) continue;
      const value = data[key];
      // Firestore Timestamp detection: has toDate function
      if (value && typeof value.toDate === 'function') {
        mapped[key] = value.toDate() || null;
      } else if (typeof value === 'object' && value !== null) {
        mapped[key] = this.mapFirestoreData(value);
      } else {
        mapped[key] = value;
      }
    }
    return mapped as T;
  }
}
