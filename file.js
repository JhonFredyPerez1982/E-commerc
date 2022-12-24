const btnIzq=document.querySelector("[data-btnIzq]");
const btnRigth=document.querySelector("[data-btnRigth]");
const createTaskLeft=() => {    
    
const list=document.querySelector("[data-categoriasLeft]");     
list.classList.add("destaques__principal");
   };
   const createTaskRigth=() => {    
    
    const list=document.querySelector("[data-categoriasRigth]");     
    list.classList.add("destaques__principal");
       };
btnIzq.addEventListener("click",createTaskLeft);
btnRigth.addEventListener("click",createTaskRigth);

