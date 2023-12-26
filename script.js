(function(){

    'use strict';

    document.getElementById('convert').addEventListener('submit', function(event){
        event.preventDefault();

        const amount = parseFloat(document.getElementById('amount').value);
        const answer = document.getElementById('answer');

        if(amount){
            const conversion = (amount * 0.05).toFixed(0);
            
            answer.innerHTML = `<h2>${amount} Dollars will cost you ${conversion} dollars in fees</h2>`;
        }else{
            answer.innerHTML = '<h2>Please provide a number!</h2>';
        }

    });
}());