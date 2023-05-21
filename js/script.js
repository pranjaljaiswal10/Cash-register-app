const billAmount=document.getElementById("billAmount");
const givenCash=document.getElementById("givenCash");
const btn=document.getElementById("btn");
let message=document.getElementById("msg");
const numberofNotes=document.querySelectorAll(".number-of-Notes")
const availableNotes=[2000,500,100,50,20,10,5,2,1];
btn.addEventListener("click",clickHandler);
function clickHandler(){
    hideMessage()
    if(Number(billAmount.value)>0)
    {
     if(Number(givenCash.value)>Number(billAmount.value))
     {
        let leftMoney=givenCash.value-billAmount.value;
         showMessage(`Return Amount=Rs${leftMoney}`);
        cashExchange(leftMoney);
     }
     else if(Number(givenCash.value)==Number(billAmount.value))
     {
        showMessage(`No cash return`);
     }
     else
     {
        showMessage(`wash the plate if no money left.`)
     }
    }
     else
     {
       showMessage(`Invalid Input!Please try again.`)
     }
     billAmount.innerHTML = "";
     givenCash.innerHTML = "";
}
function hideMessage(){
    message.style.display="none";
}
function showMessage(statement){
    message.style.display="block";
    message.innerText=statement;
}
function cashExchange(leftMoney)
{
    for(let i=0;i<availableNotes.length;i++)
    {
  const returnAmount=Math.trunc(leftMoney/availableNotes[i]);
   leftMoney%=availableNotes[i];
   numberofNotes[i].innerHTML=returnAmount;
    }
    
}
