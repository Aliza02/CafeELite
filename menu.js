// let rotation=0;
// function rotate()
// {
//     if(rotation===0)
//    {
//         document.querySelector('.addition').style.transform="rotate(135deg)";
//         rotation+=45;
//         console.log(rotation);
//    }
//     else if(rotation===45){
//         rotation=0;
//         document.querySelector('.addition').style.transform="rotate(0deg)";
//         console.log(rotation);
//     }
  
// }
const add=document.querySelectorAll('.addition');
let rotation=0;
rotate();
function rotate(){
add.forEach((addition)=>{
    addition.addEventListener('click',()=>{
        removeActiveClasses(); 
        addition.classList.remove('deactive');
        addition.classList.add('active');

      

    })
    
})
}
function removeActiveClasses()
{
    add.forEach((addition)=>{
        addition.addEventListener('click',()=>{
         
             addition.classList.remove('active');
             addition.classList.add('deactive');
             rotate();
       
          })
       

       
    })
}