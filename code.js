//changing color of heart emoji once clicked
const like = document.getElementsByClassName('fa fa-heart');

for (let i of like)
{
    i.addEventListener('click', function(){
        i.classList.toggle('mystyle')
    })
}
const x = document.getElementsByClassName('plus-button');
const y = document.getElementsByClassName('quantity');
const z = document.getElementsByClassName('minus-button');
const v = document.getElementsByClassName('unity-price-value');
const u = document.getElementsByClassName('TotalValue');
const t = document.getElementById('cart-value-value');
const rem = document.getElementsByClassName('btn-remove');



//variable declaration
var valueCount=0;
var sum=0;

 
//adjusting the plus buton
for (let i=0;i<x.length;i++)
{
x[i].addEventListener('click',function(){
    
    //ValueCount takes the value of quantity
    valueCount =y[i].value;
    console.log(valueCount);
    //Incrementing ValueCount
    valueCount++;
    //displaying
    y[i].value=valueCount;
    z[i].removeAttribute('disabled');
    u[i].innerHTML = y[i].value * Math.round(Number(v[i].innerText)*100)/100;
  
    sum += Number(v[i].innerHTML);
    t.innerHTML= sum;
    
})}

//adjusting the minus button
for (let i=0;i<x.length;i++)
{
z[i].addEventListener('click',function(){
    
    //ValueCount takes the value of quantity
    valueCount =y[i].value;
    console.log(valueCount);
    //Incrementing ValueCount
    valueCount--;
    //displaying
    y[i].value=valueCount;
    if (valueCount===0){ z[i].setAttribute('disabled','disabled') }
    u[i].innerHTML = valueCount * Math.round(Number(v[i].innerText)*100)/100;

    sum += (-Number(v[i].innerHTML))
    t.innerHTML=sum;
})}

for (let i=0;i<rem.length;i++)
{
    rem[i].addEventListener('click',function(){
         
     var updatePrice = Number(t.innerHTML)-Number(u[i].innerHTML);
     console.log(updatePrice);
        t.innerHTML = updatePrice;
        console.log(t.innerHTML);
        console.log(u[i].innerHTML);
        rem[i].parentElement.parentElement.remove();
    })
}


