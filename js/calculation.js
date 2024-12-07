function calculateInitialBalance(initialElement, initialBalance, inputBalance){
//    console.log(initialBalance, inputBalance);
const initialAmount = initialBalance - inputBalance;
console.log(initialAmount)
initialElement.innerText = initialAmount;
    
}

function donateNoakhali(){
    const noakhaliDonateElement =  document.getElementById('noakhaliFild');

    const noakhaliDonateElementString = noakhaliDonateElement.value;
    const noakhaliDonateNumber = parseFloat(noakhaliDonateElementString)
    
    const initialBalanceElement = document.getElementById('initial-balance');
    const initialBalanceElementString = initialBalanceElement.innerText;
    const initialBalance = parseFloat(initialBalanceElementString);

    const noakhaliDonateAmountElement = document.getElementById('noakhali-amount')
    const noakhaliDonateAmountElementString = noakhaliDonateAmountElement.innerText;
    const noakhaliDonateOldAmount = parseFloat(noakhaliDonateAmountElementString)

if(isNaN(noakhaliDonateNumber) === true || noakhaliDonateNumber < 0  ){
    alert('This is invalid amount')
}else if(initialBalance <= 0 || initialBalance < noakhaliDonateNumber){
    alert('Your initial Balance Is Low');
}else{


    calculateInitialBalance(initialBalanceElement, initialBalance, noakhaliDonateNumber)
const noakhaliDonateAmount = noakhaliDonateOldAmount + noakhaliDonateNumber;


noakhaliDonateAmountElement.innerText = noakhaliDonateAmount;

noakhaliDonateElement.value = ''

const historyContainer = document.getElementById('history-section')

const now = new Date(); // 
    //   document.getElementById("time").innerText = `Date: ${now}`;

const div = document.createElement('div');

div.innerHTML = `  <div class="card  border-2  border-gray-200 text-left shadow-xl">
<div class="card-body">
  <h2 class="card-title"> <span>${noakhaliDonateNumber}</span> <span> Taka is Donate for Flood at Noakhali, Bangladesh</span> </h2>
  <p>Date: ${now}</p>
  
</div>
</div>`

historyContainer.appendChild(div);



}


}

function donateFeni(){
    const feniDonateElement =  document.getElementById('feni-fild');

    const feniDonateElementString = feniDonateElement.value;
    const feniDonateNumber = parseFloat(feniDonateElementString)
    
    const initialBalanceElement = document.getElementById('initial-balance');
    const initialBalanceElementString = initialBalanceElement.innerText;
    const initialBalance = parseFloat(initialBalanceElementString);

    const feniDonateAmountElement = document.getElementById('feni-amount')
    const feniDonateAmountElementString = feniDonateAmountElement.innerText;
    const feniDonateOldAmount = parseFloat(feniDonateAmountElementString)

if(isNaN(feniDonateNumber) === true || feniDonateNumber < 0  ){
    alert('This is invalid amount')
}else if(initialBalance <= 0 || initialBalance < feniDonateNumber){
    alert('Your initial Balance Is Low');
}else{


    calculateInitialBalance(initialBalanceElement, initialBalance, feniDonateNumber)
const feniDonateAmount = feniDonateOldAmount + feniDonateNumber;


feniDonateAmountElement.innerText = feniDonateAmount;

feniDonateElement.value = ''

const historyContainer = document.getElementById('history-section')

const now = new Date(); // 
    //   document.getElementById("time").innerText = `Date: ${now}`;

const div = document.createElement('div');

div.innerHTML = `  <div class="card  border-2  border-gray-200 text-left shadow-xl">
<div class="card-body">
  <h2 class="card-title"> <span>${feniDonateNumber}</span> <span> Taka is Donate for Flood Relief in Feni,Bangladesh</span> </h2>
  <p>Date: ${now}</p>
  
</div>
</div>`

historyContainer.appendChild(div);



}


}

function donateFeni(){
    const feniDonateElement =  document.getElementById('feni-fild');

    const feniDonateElementString = feniDonateElement.value;
    const feniDonateNumber = parseFloat(feniDonateElementString)
    
    const initialBalanceElement = document.getElementById('initial-balance');
    const initialBalanceElementString = initialBalanceElement.innerText;
    const initialBalance = parseFloat(initialBalanceElementString);

    const feniDonateAmountElement = document.getElementById('feni-amount')
    const feniDonateAmountElementString = feniDonateAmountElement.innerText;
    const feniDonateOldAmount = parseFloat(feniDonateAmountElementString)

if(isNaN(feniDonateNumber) === true || feniDonateNumber < 0  ){
    alert('This is invalid amount')
}else if(initialBalance <= 0 || initialBalance < feniDonateNumber){
    alert('Your initial Balance Is Low');
}else{


    calculateInitialBalance(initialBalanceElement, initialBalance, feniDonateNumber)
const feniDonateAmount = feniDonateOldAmount + feniDonateNumber;


feniDonateAmountElement.innerText = feniDonateAmount;

feniDonateElement.value = ''

const historyContainer = document.getElementById('history-section')

const now = new Date(); // 
    //   document.getElementById("time").innerText = `Date: ${now}`;

const div = document.createElement('div');

div.innerHTML = `  <div class="card  border-2  border-gray-200 text-left shadow-xl">
<div class="card-body">
  <h2 class="card-title"> <span>${feniDonateNumber}</span> <span> Taka is Donate for Flood Relief in Feni,Bangladesh</span> </h2>
  <p>Date: ${now}</p>
  
</div>
</div>`

historyContainer.appendChild(div);



}


}

