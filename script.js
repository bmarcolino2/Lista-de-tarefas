
const listaDeTarefas = [
    "Estudar Html",
    "Estudar Css",
    "Estudar Java Script",
    "Terminar o Contador",
    "Atualizar a Lista de Tarefas"
];

function adicionar() {
    const input = document.getElementById("nova-tarefa");
    const novaTarefa = input.value.trim();
    if (novaTarefa !== "") {
        listaDeTarefas.push(novaTarefa);
        input.value = "";
        renderizar();
    }
}

function remover(indice) {
    listaDeTarefas.splice(indice, 1);
    renderizar();
}

function renderizar() {
    const ul = document.getElementById("lista-tarefas");
    ul.innerHTML = "";
    listaDeTarefas.forEach((tarefa, indice) => {
        const li = document.createElement("li");
        li.textContent = tarefa;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Apagar";
        deleteButton.className = "delete-button";
        deleteButton.onclick = () => remover(indice);

        li.appendChild(deleteButton);
        ul.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderizar);