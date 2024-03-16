
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

//TelaPrincipal
class MobileNavbar{
constructor(mobileMenu, navList, navLinks){
   this.mobileMenu = document.querySelector(mobileMenu);
   this.navList = document.querySelector(navList);
   this.navLinks = document.querySelectorAll(navLinks);
   this.activeClass = "active";

   this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {  
        link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards
        ${index /7 + 0.3}s`);
    });
  }

  handleClick(){
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent(){
  this.mobileMenu.addEventListener("click", this.handleClick);
}
  init(){
    if(this.mobileMenu){
        this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
);
mobileNavbar.init();