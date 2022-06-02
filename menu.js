let rotation=0;
function rotate()
{
    if(rotation===0)
   {
        document.querySelector('.addition').style.transform="rotate(135deg)";
        rotation+=45;
        console.log(rotation);
   }
    else if(rotation===45){
        rotation=0;
        document.querySelector('.addition').style.transform="rotate(0deg)";
        console.log(rotation);
    }
  
}
