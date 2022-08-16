// step-1: add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // get deposit amount 
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // /step-3 current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    //step-4 add numbers
    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;
    // step-5
    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // step-6
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
    // set the balance total 
    balanceTotalElement.innerText = currentBalanceTotal;

    // step-7 clear deposit feild
    depositField.value = '';
});
