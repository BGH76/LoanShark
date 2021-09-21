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
    totalInterest.innerHTML = ((monthlyPayments * payments) - loanAmount).toFixed(2);
    totalCost.innerHTML = (loanAmount + ((monthlyPayments * payments) - loanAmount)).toFixed(2);

    

    

    
}