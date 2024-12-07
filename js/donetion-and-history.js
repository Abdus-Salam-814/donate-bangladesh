document.getElementById('donate-btn').addEventListener('click', function(){

 const donateBtn = document.getElementById('donate-btn');
 donateBtn.classList.add('bg-first-btn')


 const historyBtn = document.getElementById('history-btn');

 historyBtn.classList.remove('bg-first-btn')

 historyBtn.classList.add('border-1', 'border-gray-100');

 const donetion = document.getElementById('donetion-section');
 const history = document.getElementById('history-section');

 donetion.classList.remove('hidden');
 history.classList.add('hidden');


})
document.getElementById('history-btn').addEventListener('click', function(){

 const donateBtn = document.getElementById('history-btn');
 donateBtn.classList.add('bg-first-btn')


 const historyBtn = document.getElementById('donate-btn');

 historyBtn.classList.remove('bg-first-btn')

 historyBtn.classList.add("border-1", "border-gray-100");

 
 const donetion = document.getElementById('donetion-section');
 const history = document.getElementById('history-section');

 donetion.classList.add('hidden');
 history.classList.remove('hidden');


})
