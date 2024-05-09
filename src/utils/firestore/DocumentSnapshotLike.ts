// We can't import the firebase or firebase-admin libraries, as they conflict with client and admin
// implementations respectively. That is, we want a domain object that doesn't know about the
// underlying storage implementation. However, this raises some issues, we need to use timestamp
// data types (which differ between the client and admin packages). We therefore (somewhat clumsily)
// accept the timestamp class as a constructor argument, and use it to create timestamps. We then
// use this "fake" timestamp class for unit testing within this package. We may like to come back to
// this in future.

export class DocumentSnapshotLike<T> {
  constructor(
    public readonly exists: boolean,
    public readonly ref: any,
    public readonly id: string,
    private _data?: T
  ) {}

  data(): T | undefined {
    return this._data;
  }

  get(fieldPath: any): any {
    return null;
  }

  isEqual(other: DocumentSnapshotLike<T>): boolean {
    return this.id === other.id && this.ref.path === other.ref.path;
  }
}
