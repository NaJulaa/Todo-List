const form = document.getElementById('form');
        const taskInput = document.getElementById('task');
        const tasks = document.getElementById('tasks');

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            if (taskInput.value === '') {
                return;
            }

            const task = document.createElement('li');
            task.innerHTML = `
                <input type="checkbox">
                <p>${taskInput.value}</p>
                <button type="button">Delete</button>`;

            task.querySelector('input[type="checkbox"]').addEventListener('change', toggleDone);
            task.querySelector('button').addEventListener('click', removeTask);

            tasks.appendChild(task);

            taskInput.value = '';
        });

        function toggleDone(e) {
            const task = e.target.parentNode;
            task.querySelector('p').classList.toggle('done');
        }

        function removeTask(e) {
            const task = e.target.parentNode;
            tasks.removeChild(task);
        }

//NavBar
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