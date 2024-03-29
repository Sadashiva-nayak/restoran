var burger=document.querySelector('.hamburger');
var drop=document.querySelector('.dropdown');
var choice=document.getElementsByClassName('choice');

burger.addEventListener('click',()=>{
   drop.classList.toggle('invisible');
})

Array.from(choice).forEach(element => {
   let line=element.querySelector('.underline');
   let lines=document.getElementsByClassName('underline');
   element.addEventListener('click' ,()=>{
      Array.from(lines).forEach(ele =>{
       ele.classList.add("invisible");
       ele.classList.remove('visible');
      })
      line.classList.remove("invisible");
      line.classList.toggle('visible');
   })
});