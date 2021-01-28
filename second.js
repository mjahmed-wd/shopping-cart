function cartItem(countItemId, itemPriceId, itemPrice, calculation) {
    itemPrice = parseFloat(itemPrice)
        // read count
    var readCount = document.getElementById(countItemId)
    var count = parseFloat(readCount.value)

    readCount.value = count
        // read amount
    var readPrice = document.getElementById(itemPriceId)
    var Price = parseFloat(readPrice.innerText)
    Price = count * itemPrice
    readPrice.innerText = Price
        // read subtotalPrice
    var readSubTotal = document.getElementById('subTotal').innerText

    document.getElementById('subTotal').innerText = subTotal

    // taxTotal
    var readTaxTotal = document.getElementById('taxTotal').innerText
    var taxTotal = parseFloat(readTaxTotal) + Math.round(itemPrice * .15)
    document.getElementById('taxTotal').innerText = taxTotal

    // mainTotal
    var readTotal = document.getElementById('total').innerText
    var total = parseFloat(readTotal) + Math.round(itemPrice * .15) + itemPrice
    document.getElementById('total').innerText = total
    if (calculation = '+') {
        count++
        var subTotal = parseFloat(readSubTotal) + itemPrice
        var taxTotal = parseFloat(readTaxTotal) + Math.round(itemPrice * .15)
        var total = parseFloat(readTotal) + Math.round(itemPrice * .15) + itemPrice
    } else if (calculation = '-') {
        count--
        if (count < 0) {
            return count = 0
        }
        var subTotal = parseFloat(readSubTotal) - itemPrice
        var taxTotal = parseFloat(readTaxTotal) - Math.round(itemPrice * .15)
        var total = parseFloat(readTotal) - Math.round(itemPrice * .15) - itemPrice
    } else if (calculation = 'x') {
        readCount.value = count - count
        readPrice.innerText = Price - Price
        document.getElementById('subTotal').innerText = subTotal - Price
        document.getElementById('taxTotal').innerText = taxTotal - Math.round(Price * .15);
        var total = parseFloat(readTotal) - count * Math.round(itemPrice * .15) - count * itemPrice
    }
}