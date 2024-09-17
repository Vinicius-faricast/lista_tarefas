import { taskElement } from "../Task/Task.js";

const body = document.querySelector('body');

const createModal = () => {
    const dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'dialog');

    const btnClose = document.createElement('button');
    btnClose.classList.add('btn-close');

    btnClose.innerText = "X";

    const h2 = document.createElement('h2');
    h2.innerText = 'Editar Tarefa';

    const formUpdateTask = document.createElement('form');
    const inputUpdateTask = document.createElement('input');
    inputUpdateTask.classList.add('inputUpdate');
    inputUpdateTask.required = true;

    const btnUpdate = document.createElement('button');
    btnUpdate.classList.add('btn-update')
    btnUpdate.innerText = "Alterar";


    dialog.append(h2);
    dialog.append(btnClose);
    formUpdateTask.append(inputUpdateTask);
    formUpdateTask.append(btnUpdate);
    dialog.append(formUpdateTask);
    body.append(dialog);

}

export const Modal = task => {
    let dialog = document.querySelector('#dialog');

    if(dialog){
        dialog.remove();
        createModal()
        dialog = document.querySelector('#dialog');
    }else{
        createModal()
        dialog = document.querySelector('#dialog');
    }
    
    dialog.showModal();

    const btn = document.querySelector('.btn-update');
    const inputUpdate = document.querySelector('.inputUpdate');
    const btnClose = document.querySelector('.btn-close');

    dialog.addEventListener('cancel', (event) => {
        dialog.remove()
        event.preventDefault();
    });

    btnClose.addEventListener('click', () => {
        dialog.remove()
    })


    btn.addEventListener('click', e => {
        e.preventDefault();
        const p = document.createElement('p');
        if(inputUpdate.value){

            p.innerText = inputUpdate.value;
            task.innerText = '';
            task.append(p)
            task.append(taskElement());
            
            dialog.close();
            !dialog.hasAttribute('open') && dialog.remove() 
        } else{
            const pAlert = document.createElement('p');
            pAlert.classList.add('alertMessage');
            pAlert.innerText = "campo obrigatório";

            dialog.append(pAlert)
        }
    })


}
