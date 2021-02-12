export class Commentaire {
  // tslint:disable-next-line:variable-name
  private _author: string;
  // tslint:disable-next-line:variable-name
  private _message: string;
  // tslint:disable-next-line:variable-name
  private _dateTime: Date;

  constructor(author: string, message: string) {
    this._author = author;
    this._message = message;
    this._dateTime = new Date();
  }

  get author(): string {
    return this._author;
  }

  set author(value: string) {
    this._author = value;
  }

  get message(): string {
    return this._message;
  }

  set message(value: string) {
    this._message = value;
  }

  get dateTime(): Date {
    return this._dateTime;
  }

}
