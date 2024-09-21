
export interface ListProps {
    id: string,
    item: string,
    status: boolean
}

export class ListItem implements ListProps {
    private _id: string;
    private _item: string;
    private _status: boolean;

    constructor(id:string, item: string, status: boolean = false) {
     this._id = id;
     this._item = item;
     this._status = status;
    }

    get getId():string {
        return this._id
    }
    set id(newId: string) {
        this._id = newId
    }
    get item(): string {
        return this._item;
      }
    set item(newItem: string) {
        this._item = newItem;
    }
    get status(): boolean {
        return this._status;
    }
    set status(newStatus: boolean) {
        this._status = newStatus;
    }
}
