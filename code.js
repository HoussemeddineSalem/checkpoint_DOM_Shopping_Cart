//changing color of heart emoji once clicked
const like = document.getElementsByClassName('fa fa-heart');

for (let i of like)
{
    i.addEventListener('click', function(){
        i.classList.toggle('mystyle')
    })
}

//Plus button 
var x = document.getElementsByClassName('plus-button');
//Qty entred by user 
var y = document.getElementsByClassName('quantity');
//Minus button
var z = document.getElementsByClassName('minus-button');
//Item Price
var v = document.getElementsByClassName('unity-price-value');
//Total Price for each element
var u = document.getElementsByClassName('TotalValue');
//Total value all items
var t = document.getElementById('cart-value-value');
//remove button
var rem = document.getElementsByClassName('btn-remove');


//variable declaration
var valueCount=0;
var sum=0;
var roundSum=0;
var remBtn = Array.from(rem)

//adjusting the plus buton
for (let i=0;i<remBtn.length;i++)
{
    //Array.from function is used to convert the like array given 
    //by getByClassName to a live array each time the remove button is clicked
let plusButton = Array.from(x);
let minusButton = Array.from(z);
let ItemQty = Array.from(y);
let UnityPrice = Array.from(v);
let ttlValue = Array.from(u);

    
plusButton[i].addEventListener('click',function(){
     
    valueCount =ItemQty[i].value;
    
     //Incrementing ValueCount
     valueCount++;
     //displaying
     ItemQty[i].value=valueCount;
     
    minusButton[i].removeAttribute('disabled');
    ttlValue[i].innerHTML = ItemQty[i].value * Math.round(Number(UnityPrice[i].innerText)*100)/100;
  
    
    sum += Number(UnityPrice[i].innerHTML);
    roundSum = Math.round(sum*100)/100;
    console.log(sum);
    t.innerHTML=roundSum;
   
    
})}

//adjusting the minus button
for (let i=0;i<remBtn.length;i++)
{

let minusButton = Array.from(z);
let ItemQty = Array.from(y);
let UnityPrice = Array.from(v);
let ttlValue = Array.from(u);


    
    minusButton[i].addEventListener('click',function(){
       
    
     
     valueCount =ItemQty[i].value;
    
     //Incrementing ValueCount
     valueCount--;
     //displaying
     ItemQty[i].value=valueCount;
     
    
    if (valueCount===0){ minusButton[i].setAttribute('disabled','disabled') }
    
    ttlValue[i].innerHTML = ItemQty[i].value * Math.round(Number(UnityPrice[i].innerText)*100)/100;

    sum += -Number(UnityPrice[i].innerHTML);
    roundSum = Math.round(sum*100)/100;
    
    t.innerHTML=roundSum;
    
    
})}


//adjusting the remove button
for (let i=0;i<remBtn.length;i++)
{
    let ttlValue = Array.from(u);
    remBtn[i].addEventListener('click',function(){
        
        var updatePrice = Number(t.innerHTML)-Number(ttlValue[i].innerHTML);
        
        sum = updatePrice;
        t.innerHTML = sum;
        t.innerHTML = updatePrice;
        
        var y = document.getElementsByClassName('quantity');
        
        remBtn[i].parentElement.parentElement.remove();
        
       
        
        
    })
}

