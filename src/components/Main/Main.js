import { Task } from "../Task/Task.js";
import { Modal } from "../Modal/Modal.js"

const taskForm = document.querySelector('.task-form');
const inputTask = document.querySelector('.task-input');
let taskItens = document.querySelectorAll('.task-item');
const taskList = document.querySelector('.list-task');


export const main = () => {
    taskForm.addEventListener('submit', e => {
        e.preventDefault()
        const task = {taskValue : inputTask.value};
        const { taskValue } = task;

        inputTask.value = '';
        taskList.append(Task(taskValue));
        taskItens = document.querySelectorAll('.task-item');

        taskItens.forEach(task => {
            task.addEventListener('click', e => {
                e.target.closest('.btn-delete') && task.remove();               
            });
        });

        taskItens.forEach(task => {
            task.addEventListener('click', e => {
                e.target.closest('.btn-edit') && Modal(task);
            })
        })

    });
  
};