export const taskElement = () => {
    const containerBtn = document.createElement('div');
    containerBtn.classList.add('container-btn');

    const btnDelete = document.createElement('button');
    btnDelete.classList.add('btn-delete');

    const imgDelet = document.createElement('img');
    imgDelet.setAttribute('src', './assets/delete.png');

    const btnEdit = document.createElement('button');
    btnEdit.classList.add('btn-edit');

    const imgEdit = document.createElement('img');
    imgEdit.setAttribute('src', 'assets/edit.png');

    btnDelete.append(imgDelet);
    btnEdit.append(imgEdit);
    containerBtn.append(btnDelete);
    containerBtn.append(btnEdit);

    return containerBtn;

}

export const Task = (task) => {
    const li = document.createElement('li');
    li.classList.add('task-item');

    const p = document.createElement('p');
    p.classList.add('text-task')
    p.innerText = task;

    li.append(p);
    li.append(taskElement());

    return li;
}
