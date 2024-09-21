
import { FullList } from './model/FullList'; 
import { ListTemplate } from './templates/ListTemplate'; 


document.addEventListener('DOMContentLoaded', () => {
  const fullList = new FullList();
  const listTemplate = new ListTemplate();

  // Renderizar la lista al cargar la página
  listTemplate.render(fullList);

  // Configurar el evento para agregar nuevos ítems al formulario
  const form = document.getElementById('itemEntryForm') as HTMLFormElement;
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();
    const input = document.getElementById('newItem') as HTMLInputElement;
    if (input.value.trim()) {
      fullList.addItem(input.value.trim());
      input.value = ''; // Limpiar el campo de entrada
      listTemplate.render(fullList); // Renderizar la lista actualizada
    }
  });
  
  // Configurar el evento para el botón de "clear all"
  const clearButton = document.getElementById('clearItemsButton') as HTMLButtonElement;
  clearButton.addEventListener('click', () => {
    fullList.clearList(); // Limpiar la lista en FullList
    listTemplate.clear();  // Limpiar la lista en el DOM
  });
});