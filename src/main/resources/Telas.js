const formulario = document.querySelector("form");

const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Inome = document.querySelector(".nome")

// Página Login
function logar (){
    fetch("http://localhost:5432/logar",
    {
        headers:{
            'Acept':'aplication/json',
            'Content-type':'aplication/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: Iemail.value,
            senha: Isenha.value
        })
    })
    .then( function (res) {console.log(res)})
    .catch( function (res) { console.log(res) })
};

function limpar(){
    Iemail.value = "";
    Isenha.value = "";
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();
    
    logar();
    limpar();
})

//TelaPrincipal
// function toggleSidebar() {
//     var sidebar = document.getElementById("sidebar");
//     if (sidebar.style.width === "50px") {
//       sidebar.style.width = "250px";
//     } else {
//       sidebar.style.width = "50px";
//     }
//   }

// Cadastro
function cadastrar(){
    fetch("http://localhost:5432/task",
    {
        headers:{
            'Acept':'aplication/json',
            'Content-type':'aplication/json'
        },
        method: "POST",
        body: JSON.stringify({
            email: Iemail.value,
            senha: Isenha.value,
            nome: Inome.value
        })
    })
    .then( function (res) {console.log(res)})
    .catch( function (res) { console.log(res) })
};

function limpar(){
    Iemail.value = "";
    Isenha.value = "";
    Inome.value = "";
}

formulario.addEventListener('submit', function(event){
    event.preventDefault();

    cadastrar();
    limpar();
})

const button = document.querySelector('.Logar')

function IrTelaPrincipal(){

    console.log(input.value)

} 

button.addEventListener('click', IrTelaPrincipal)