import { inject, Injectable } from "@angular/core";
import { Auth, authState, GoogleAuthProvider, signInWithPopup, signOut, User, UserCredential } from "@angular/fire/auth";
import { map, Observable, tap } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private auth: Auth = inject(Auth);
  private authState$ = authState(this.auth);

  loggedUser$: Observable<User | null> = this.authState$.pipe(tap(user => console.log('Auth State:', user)));
  isLogged$: Observable<boolean> = this.loggedUser$.pipe(map((user) => Boolean(user)));

  login(): Promise<UserCredential> {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
  }

  logout(): Promise<void> {
    return signOut(this.auth);
  }

  // private firestoreService = inject(FirestoreService);

  // loggedUser$: Observable<User | null> = this.authState$.pipe(
  //   switchMap((user: FirebaseUser) => user ? this.firestoreService.getByProp<User>('users', 'email', user.email) : of([])),
  //   map((data: User[]) => data.length ? data[0] : null)
  // );

  // isLogged$: Observable<boolean> = this.loggedUser$.pipe(
  //   map((user) => Boolean(user))
  // );

  // isAdmin$: Observable<boolean> = this.loggedUser$.pipe(
  //   map((user) => user?.admin ?? false)
  // );

  // login(): Observable<void> {
  //   const provider = new GoogleAuthProvider();
  //   return from(signInWithPopup(this.auth, provider)).pipe(
  //     first(),
  //     map((result) => result.user),
  //     switchMap((user: FirebaseUser) => this.createUserIfNotExists(user)),
  //   );
  // }

  // logout(): Observable<void> {
  //   return from(signOut(this.auth)).pipe(first());
  // }

  // private createUserIfNotExists(user: FirebaseUser): Observable<void> {
  //   return this.firestoreService.getByProp<User>('users', 'email', user.email).pipe(
  //     tap(console.log),
  //     switchMap((users: User[]) => users.length 
  //       ? EMPTY 
  //       : this.firestoreService.post<void>('users', { email: user.email, admin: false }
  //     )),
  //   );
  // }

  //   private readonly firestore = inject(Firestore);

  // private getUserByEmail(user: FirebaseUser): Observable<User | null> {
  //   return from(getDoc(doc(this.firestore, 'users', user.email!))).pipe(
  //     first(),
  //     map(doc => doc.exists() ? ({
  //       email: doc.id, 
  //       admin: doc.data()['admin'], 
  //       bets: doc.data()['bets'],
  //       avatarUrl: user.photoURL || '',
  //     } satisfies User) : null),
  //   );
  // }

  // private readonly auth = inject(Auth);
  // private readonly authState$ = authState(this.auth);

  // loggedUser$: Observable<User | null> = this.authState$.pipe(
  //   switchMap((user: FirebaseUser | null) => user ? this.getUserByEmail(user) : of(null)),
  // );
  // isLogged$: Observable<boolean> = this.loggedUser$.pipe(map((user) => Boolean(user)));

  // login(): Promise<void | UserCredential> {
  //   const provider = new GoogleAuthProvider();
  //   return signInWithPopup(this.auth, provider);
  // }

  // logout(): Promise<void> {
  //   return signOut(this.auth);
  // }
}
  