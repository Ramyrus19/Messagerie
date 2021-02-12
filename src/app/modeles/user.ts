export class User {
  // tslint:disable-next-line:variable-name
  private _prenom: string;

  constructor(prenom: string) {
    this._prenom = prenom;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }
}
