export declare class DocumentSnapshotLike<T> {
    readonly exists: boolean;
    readonly ref: any;
    readonly id: string;
    private _data?;
    constructor(exists: boolean, ref: any, id: string, _data?: T | undefined);
    data(): T | undefined;
    get(fieldPath: any): any;
    isEqual(other: DocumentSnapshotLike<T>): boolean;
}
