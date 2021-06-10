function handlePhoneCount(isIncrease) {
    const phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value);

    let phoneNewCount = phoneCount;
    if (isIncrease == true) {
        phoneNewCount = phoneCount + 1;
    }
    if (isIncrease == false && phoneCount > 0) {
        phoneNewCount = phoneCount - 1;
    }
    phoneInput.value = phoneNewCount;
    const totalPhone = phoneNewCount * 1210;
    document.getElementById('totalPhone').innerText = '$' + totalPhone;
    calculateTotal();
}


function handleCaseCount(isIncrease) {
    const caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);

    let caseNewCount = caseCount;
    if (isIncrease == true) {
        caseNewCount = caseCount + 1;
    }
    if (isIncrease == false && caseCount > 0) {
        caseNewCount = caseCount - 1;
    }
    caseInput.value = caseNewCount;
    const totalCase = caseNewCount * 40;
    document.getElementById('totalCase').innerText = '$' + totalCase;
    calculateTotal();
}


function calculateTotal() {
    const phoneInput = document.getElementById('phoneCount');
    const phoneCount = parseInt(phoneInput.value);

    const caseInput = document.getElementById('caseCount');
    const caseCount = parseInt(caseInput.value);

    const subTotal = phoneCount * 1210 + caseCount * 40;
    document.getElementById('subTotal').innerText = '$' + subTotal;

    const taxAmount = subTotal * 0.1;
    document.getElementById('taxAmount').innerText = '$' + taxAmount;

    const grandTotal = subTotal + taxAmount;
    document.getElementById('grandTotal').innerText = '$' + grandTotal;
}
