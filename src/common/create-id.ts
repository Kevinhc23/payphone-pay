import { v4 as uuidv4 } from 'uuid';

export class TransactionId {
  public id: string;

  constructor() {
    this.id = uuidv4().substring(0, 15);
  }

  public createUUID(): string {
    return this.id;
  }
}
