function calculation(singleProductPriceTotalId, inputIdName, itemPrice, logic) {
    if (logic == "+") {
        document.getElementById(inputIdName).value = readValue(inputIdName) + 1
    } else if (logic == "-") {
        if (readValue(inputIdName) > 0) {
            document.getElementById(inputIdName).value = readValue(inputIdName) - 1
        } else {
            document.getElementById(inputIdName).value = 0
        }
    } else if (logic == "x") {
        document.getElementById(inputIdName).value = 0
    }
    document.getElementById(singleProductPriceTotalId).innerText = readValue(inputIdName) * itemPrice
    var subTotal = document.getElementById('subTotal');
    subTotal.innerText = readValue('countIPhone') * 1219 + readValue('countCover') * 59
    var taxTotal = document.getElementById('taxTotal');
    taxTotal.innerText = Math.round((readValue('countIPhone') * 1219 + readValue('countCover') * 59) * .2)
    document.getElementById('total').innerText = parseInt(subTotal.innerText) + parseInt(taxTotal.innerText)
}

function readValue(inputIdName) {
    return parseInt(document.getElementById(inputIdName).value)
}