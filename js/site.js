document.getElementById("btnCal").addEventListener("click", calculate);

let totalPrincipal = document.getElementById("totalPrincipal");
let totalInterest = document.getElementById("totalInterest");
let totalCost = document.getElementById("totalCost");
let totalMonthlyPayment = document.getElementById("totalMonthlyPayment");
let results = document.getElementById("results");

function calculate(){

    let loanAmount = parseInt(document.getElementById("loanAmount").value);
    let payments = parseInt(document.getElementById("payments").value);
    let rate = (parseFloat(document.getElementById("rate").value))/100;

    let p = loanAmount;
    let r = rate / 12;
    let n = payments;

    // Calculate monthly payments
    let numerator = (r * ((1 + r)**(n)));
    let denominator = ((1 + r)**(n)) - 1;
    let monthlyPayments = (p * (numerator / denominator));

    // Set app page data
    totalMonthlyPayment.innerHTML = monthlyPayments.toFixed(2);
    totalPrincipal.innerHTML = loanAmount;
    totalInterest.innerHTML = ((monthlyPayments * payments) - loanAmount).toFixed(2);
    totalCost.innerHTML = (loanAmount + ((monthlyPayments * payments) - loanAmount)).toFixed(2);

    // Calculate data and populate table
    let balance = loanAmount;
    let principal = 0;
    let interest = 0;
    let totInterest = 0;
    let tagString = [];
    for(let i = 1; i <= payments; i++){
        interest = balance * r;
        principal = monthlyPayments.toFixed(2) - interest;
        balance = balance - principal;
        totInterest += interest;
        tagString += `<tr>
                    <td>${i}</td>
                    <td>${monthlyPayments.toFixed(2)}</td>
                    <td>${principal.toFixed(2)}</td>
                    <td>${interest.toFixed(2)}</td>
                    <td>${totInterest.toFixed(2)}</td>
                    <td>${balance.toFixed(2)}</td>
                    </tr>`;
    }
    results.innerHTML = tagString;
    console.log(tagString);    
}