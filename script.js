var plusButtonIPhone = document.getElementById('iPhoneAdd')
plusButtonIPhone.addEventListener('click', function() {
    // // read count
    // var readCount = document.getElementById('countIPhone')
    // var count = parseFloat(readCount.value)
    // count++
    // readCount.value = count
    //     // read amount
    // var readPrice = document.getElementById('iPhonePrice')
    // var Price = parseFloat(readPrice.innerText)
    // Price = count * 1219
    // readPrice.innerText = Price
    //     // read subtotalPrice
    // var readSubTotal = document.getElementById('subTotal').innerText
    // var subTotal = parseFloat(readSubTotal) + 1219
    // document.getElementById('subTotal').innerText = subTotal

    // // taxTotal
    // var readTaxTotal = document.getElementById('taxTotal').innerText
    // var taxTotal = parseFloat(readTaxTotal) + Math.floor(1219 * .15)
    // document.getElementById('taxTotal').innerText = taxTotal

    // // mainTotal
    // var readTotal = document.getElementById('total').innerText
    // var total = parseFloat(readTotal) + Math.floor(1219 * .15) + 1219
    // document.getElementById('total').innerText = total
    addItem('countIPhone', 'iPhonePrice', 1219)

})
var plusButtonCover = document.getElementById('coverAdd')
plusButtonCover.addEventListener('click', function() {
    addItem('countCover', 'coverPrice', 59)

})


function addItem(countItemId, itemPriceId, itemPrice) {
    itemPrice = parseFloat(itemPrice)
        // read count
    var readCount = document.getElementById(countItemId)
    var count = parseFloat(readCount.value)
    count++
    readCount.value = count
        // read amount
    var readPrice = document.getElementById(itemPriceId)
    var Price = parseFloat(readPrice.innerText)
    Price = count * itemPrice
    readPrice.innerText = Price
        // read subtotalPrice
    var readSubTotal = document.getElementById('subTotal').innerText
    var subTotal = parseFloat(readSubTotal) + itemPrice
    document.getElementById('subTotal').innerText = subTotal

    // taxTotal
    var readTaxTotal = document.getElementById('taxTotal').innerText
    var taxTotal = parseFloat(readTaxTotal) + Math.floor(itemPrice * .15)
    document.getElementById('taxTotal').innerText = taxTotal

    // mainTotal
    var readTotal = document.getElementById('total').innerText
    var total = parseFloat(readTotal) + Math.floor(itemPrice * .15) + itemPrice
    document.getElementById('total').innerText = total
}


var minusButtonIphone = document.getElementById('iPhoneRemove')
minusButtonIphone.addEventListener('click', function() {
    removeItem('countIPhone', 'iPhonePrice', 1219)
})
var minusButtonCover = document.getElementById('coverRemove')
minusButtonCover.addEventListener('click', function() {
    removeItem('countCover', 'coverPrice', 59)
})

function removeItem(countItemId, itemPriceId, itemPrice) {
    itemPrice = parseFloat(itemPrice)
        // read count
    var readCount = document.getElementById(countItemId)
    var count = parseFloat(readCount.value)
    count--
    if (count < 0) {
        return count = 0
    }
    readCount.value = count
        // read amount
    var readPrice = document.getElementById(itemPriceId)
    var Price = parseFloat(readPrice.innerText)
    Price = count * itemPrice
    readPrice.innerText = Price
        // read subtotalPrice
    var readSubTotal = document.getElementById('subTotal').innerText
    var subTotal = parseFloat(readSubTotal) - itemPrice
    document.getElementById('subTotal').innerText = subTotal

    // taxTotal
    var readTaxTotal = document.getElementById('taxTotal').innerText
    var taxTotal = parseFloat(readTaxTotal) - Math.floor(itemPrice * .15)
    document.getElementById('taxTotal').innerText = taxTotal

    // mainTotal
    var readTotal = document.getElementById('total').innerText
    var total = parseFloat(readTotal) - Math.floor(itemPrice * .15) - itemPrice
    document.getElementById('total').innerText = total
}