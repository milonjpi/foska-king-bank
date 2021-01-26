document.getElementById('logSubmit').addEventListener('click', function(){
    document.getElementById('loginArea').style.display = 'none';
    document.getElementById('bankArea').style.display = 'block';

})


document.getElementById('depositBtn').addEventListener('click', function(){
    const depositAmo = getInputValue('depositAmount');

    updateInputValue('totalDeposit', depositAmo);
    updateInputValue('totalBalance', depositAmo);

    document.getElementById('depositAmount').value = "";
})

document.getElementById('withdrawBtn').addEventListener('click', function(){
    const withdrawAmo = getInputValue('withdrawAmount');

    updateInputValue('totalWithdraw', withdrawAmo);
    updateInputValue('totalBalance', -1 * withdrawAmo);

    document.getElementById('withdrawAmount').value = "";
})


function getInputValue(Id){
    const inputAmount = document.getElementById(Id).value;
    const amountValue = parseFloat(inputAmount);
    return amountValue;
}
function updateInputValue(Id, addedValue){
    const current = document.getElementById(Id).innerText;
    const currentNumber = parseFloat(current);
    const totalNumber = addedValue + currentNumber;
    document.getElementById(Id).innerText = totalNumber;
}