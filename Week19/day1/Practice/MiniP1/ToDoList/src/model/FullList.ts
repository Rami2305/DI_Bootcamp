import { ListItem } from './ListItem';

export class FullList {
    //to save the full list of listitem
    private _list: ListItem[] = []; 

    constructor() {
        this.loadFromLocalStorage(); // Cargar la lista desde localStorage al inicializar
    }
    //to load the list from localstorage
    loadFromLocalStorage(): void {
        const storedList = localStorage.getItem('todoList');
        if (storedList) {
            const parsedList = JSON.parse(storedList);
            this._list = parsedList.map(
                (item: { id:string; item: string; status: boolean}) => new ListItem(item.id, item.item, item.status)
            )
        }
    }

    // to save new list in localstorage
    saveToLocalStorage(): void {
        localStorage.setItem('todoList', JSON.stringify(this._list))
    }

    //to add item to the list
    addItem(itemText: string): void {
        const newItem = new ListItem(Date.now().toString(), itemText); 
        this._list.push(newItem);
        this.saveToLocalStorage();
    }
        //to remove from the list
    removeItem(id: string): void {
        console.log('Removing item with ID:', id);
        this._list = this._list.filter((listItem) => listItem.getId !== id);
        this.saveToLocalStorage();// Guardar los cambios
        console.log('Current list after removal:', this._list);
    }
    //to clean the list
    clearList(): void {
        this._list = [];
        localStorage.removeItem('todoList');
    }
    
    // to get the full list of items
    
    get list(): ListItem[] {
        return this._list;
    }

}