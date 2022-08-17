document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Please, enter a valid number');
        return;
    }
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('You do not heve enough balance ');
        return;
    }
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})