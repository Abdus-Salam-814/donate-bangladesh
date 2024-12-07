

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


const noakhaliDonateAmount = noakhaliDonateOldAmount + noakhaliDonateNumber;


noakhaliDonateAmountElement.innerText = noakhaliDonateAmount;

const historyContainer = document.getElementById('history-section')

const now = new Date(); // 
    //   document.getElementById("time").innerText = `Date: ${now}`;

const div = document.createElement('div');

div.innerHTML = `  <div class="card  border-2  border-gray-200 text-left shadow-xl">
<div class="card-body">
  <h2 class="card-title"> <span>${noakhaliDonateNumber}</span> <span> Taka is Donated for famine-2024 at Feni, Bangladesh</span> </h2>
  <p>Date: ${now}</p>
  
</div>
</div>`

historyContainer.appendChild(div);

}


}

