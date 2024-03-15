
const button = document.querySelector('.adicionarTask')
const input = document.querySelector('.input-task')
const allTasks = document.querySelector('.list-task')

let minhasTasks = []

function adicionaTask(){ 
    minhasTasks.push({

        tarefa:input.value,
        fechada:false
        
    })

    input.value = ''

    mostrarTasks()

} 


function mostrarTasks(){

    let novaLI = ''

    minhasTasks.forEach((task, index) => {
        novaLI = novaLI + `
             <li class="task ${task.fechada && "done"}">
             <img src="./img/done.png" alt="check-na-tarefa" onclick= "fecharTask(${index})">
             <p>${task.tarefa}</p>
             <img src="./img/lixo.png" alt="tarefa-para-o-lixo" onclick = "deletarTask(${index})">
         </li>`
    })
    allTasks.innerHTML = novaLI

}


function deletarTask(index){
    minhasTasks.splice(index, 1)
    
    mostrarTasks()
}


function fecharTask(index){
    minhasTasks[index].fechada = !minhasTasks[index].fechada
    // console.log(index)
    mostrarTasks()

}

button.addEventListener('click', adicionaTask)

