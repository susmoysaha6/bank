document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDepositAmount = getInputFieldValueById('deposit-field');

    if (isNaN(newDepositAmount) || newDepositAmount < 0) {
        alert('Please, enter a valid number');
        return;
    }

    const previousDepositTotal = getTextElementValueById('deposit-total');
    // 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //
    setTextElementValueById('deposit-total', newDepositTotal);
    // previous balance 
    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    //
    setTextElementValueById('balance-total', newBalanceTotal);
})