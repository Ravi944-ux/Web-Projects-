const loanAmount = document.getElementById("loan_amount");
const loanTenure = document.getElementById("loan_tenure");
const loanRate = document.getElementById("loan_interest");

const loanEmi = document.querySelector(".loan_emi");
const loanPrinciple = document.querySelector(".loan_principle");
const loanTotal = document.querySelector(".loan_total");
const loanInterest = document.querySelector(".loan_interest_rate");

const calculatorBtn = document.getElementById("calculator-btn")


calculatorBtn.addEventListener("click", function () {
    let amount = loanAmount.value;
    let tenure = loanTenure.value * 12; // Convert years to months
    let rate = loanRate.value / (12 * 100); // Monthly interest rate

    // EMI Calculation
    let emi = ((amount * rate * (1 + rate) ** tenure) / (((1 + rate) ** tenure )- 1));


    let total = (emi * tenure);
    let interest = total - amount;

    loanEmi.innerHTML = Math.floor(emi);
    loanPrinciple.innerHTML = Math.floor(amount);
    loanTotal.innerHTML = Math.floor(total);
    loanInterest.innerHTML = Math.floor(interest);


    let xvalues = ["Principle", "interest"];
    let yvalues = [amount, Math.floor(interest)];

    let barColors = [
        "#961251",
        "#000000"
    ];

        new Chart("loanChart",{
        type: "pie",
        data: {
            labels: xvalues,
            datasets: [{
                backgroundColor: barColors,
                data: yvalues
            }] 
        },
        options: {
            title: {
                display: false,
            }
        }
    })
    
});

