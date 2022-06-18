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
// cart

let products=[
    {
        name:'Chocolate Fudge',
        tag:'chocolate fudge',
        price: '1',
        incart:0
    },
    {
        name:'Cupcakes',
        tag:'cupcakes',
        price: '4',
        incart:0
    },
    {
        name:'Cookies',
        tag:'cookies',
        price: '3',
        incart:0
    },
    {
        name:'French Toast',
        tag:'french toast',
        price: '5',
        incart:0
    },
    {
        name:'Cheese Omelette',
        tag:'cheese omellete',
        price: '10',
        incart:0
    },
    {
        name:'Pancakes',
        tag:'pancakes',
        price: '10',
        incart:0
    },
    {
        name:'Egg Muffins',
        tag:'egg muffins',
        price: '12',
        incart:0
    },
    {
        name:'Cardamom Rolls ',
        tag:'cardamom rolls',
        price: '12',
        incart:0
    },
    {
        name:'Frittatas',
        tag:'frittatas',
        price: '10',
        incart:0
    },
]
let  cart=document.querySelectorAll('.add-cart');
for(let i=0; i<cart.length; i++)
{
    cart[i].addEventListener('click',()=>{
        cartnumber(products[i]);
        totalcost(products[i]);
    })
}

function cartnumber(product)
{

    let productnumber=localStorage.getItem('cartnumber');
    productnumber=parseInt(productnumber);
    if(productnumber)
    {
    localStorage.setItem('cartnumber',productnumber+1);
    document.querySelector('.nav-item span').textContent=productnumber +1;
    }
    else{
        localStorage.setItem('cartnumber',1);
        document.querySelector('.nav-item span').textContent=1;
    }

    setitems(product);
}

function setitems(product)
{
    let cartitem=localStorage.getItem('productsincart');
    cartitem=JSON.parse(cartitem);
    
    if(cartitem!=null)
    {
        if(cartitem[product.tag]==undefined){
            cartitem={
                ...cartitem,
                [product.tag]:product
            }
        }
        cartitem[product.tag].incart+=1;
    }
    else{
        product.incart=1;
        cartitem={
        [product.tag]:product
       }
    }
   
   localStorage.setItem('productsincart',JSON.stringify(cartitem));
}

function totalcost(product)
{
    // console.log('product price', product.price);
    let cartcost=localStorage.getItem('totalcost');
    
    console.log('my cart', cartcost);
    if(cartcost!=null){
        cartcost=parseInt(cartcost);
        product.price=parseInt(product.price);
        cartcost+=product.price;
        localStorage.setItem('totalcost', cartcost );

    }
    else{
        localStorage.setItem('totalcost',product.price);
    }
    

}

function onloadcartnumber()
{
    let productnumber=localStorage.getItem('cartnumber');
    if(productnumber)
    {
        document.querySelector('.nav-item span').textContent=productnumber;
        
    }
}

onloadcartnumber();
