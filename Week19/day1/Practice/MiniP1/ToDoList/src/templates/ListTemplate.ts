
import { FullList } from '../model/FullList';


export class ListTemplate {
  private ul: HTMLUListElement;

  constructor() {
    this.ul = document.getElementById('todoList') as HTMLUListElement;
    if (!this.ul) {
      throw new Error("El elemento <ul> con ID 'todoList' no fue encontrado.");
    }
  }

  render(fullList: FullList): void {
    this.ul.innerHTML = ''; //clean the list of dom

    fullList.list.forEach((item) => {
      const li = document.createElement('li');
      li.className = 'todo-item';

      // Crear el checkbox
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.id = item.getId;
      checkbox.checked = item.status;
      checkbox.addEventListener('change', () => {
        item.status = checkbox.checked; // refresh the status of the task
        fullList.saveToLocalStorage();  // save the new list
      });

      // create the new task text
      const label = document.createElement('label');
      label.htmlFor = item.getId;
      label.textContent = item.item;

      // delete buton
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Delete';
      deleteButton.addEventListener('click', () => {
        console.log('Button clicked for item with ID:', item.getId); // Verifica el ID del ítem
        fullList.removeItem(item.getId);  // Eliminar tarea
        this.render(fullList);         // Renderizar la lista actualizada
      });

      // add element to <li>
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);

      // add <li> to <ul>
      this.ul.appendChild(li);
    });
  }

  clear(): void {
    this.ul.innerHTML = ''; 
  }
}
