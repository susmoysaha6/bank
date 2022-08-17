/*  */

// step-1
document.getElementById('btn-withdraw').addEventListener('click', function () {
    // step-2 
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdawAmountString = withdrawField.value;
    const newWithdawAmount = parseFloat(newWithdawAmountString);

    // step-7 
    withdrawField.value = '';

    if (isNaN(newWithdawAmount)) {
        alert('Enter withdraw amount');
        return;
    }
    // step-3 
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // step-5 
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);


    if (newWithdawAmount > previousBalanceTotal) {
        alert('You do not heve enough balance ');
        return;
    }
    // step-4
    const currentWithdrawTotal = previousWithdrawTotal + newWithdawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    // step-6 
    const currentBalanceTotal = previousBalanceTotal - newWithdawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;


});