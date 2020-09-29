const itemsContainer = document.getElementById('items')
import data from './data.js'

// Length of our data determines how many times this loops
for (let i = 0; i < data.length; ++i) {
    // Create a new div element and give it a class name
    let newDiv = document.createElement('div');
    newDiv.className = 'item'

    // Create an image element
    let img = document.createElement('img')
    // This will change each time we go through the loop
    img.src = data[i].image
    img.width = 300
    img.height = 300

    // Add image to the div
    newDiv.appendChild(img)
    console.log(img)

    // Create a paragraph element for a description
    let desc = document.createElement('P')
    // Give the paragraph text from the data
    desc.innerText = data[i].desc
    // Append the paragraph to the div
    newDiv.appendChild(desc)
    // Do the same thing for price
    let price = document.createElement('P')
    price.innerText = data[i].price
    newDiv.appendChild(price)

    let button = document.createElement('button')
    button.id = data[i].name

    // Create a custom attribute called data-price
    // Will hold the price of each element in the button
    button.dataset.price = data[i].price
    button.innerHTML = 'Add to Cart'
    newDiv.appendChild(button)
    itemsContainer.appendChild(newDiv)
}

const cart = [ ]

function addItem(name, price) {
    for (let i = 0; i < cart.length; i += 1) {
        if (cart[i].name === name) {
            cart[i].qty += 1
            // Stop here
            return
        }
    }

    const item = { name, price, qty: 1 } 
    cart.push(item)
}

// Show items
function showItems() {
    const qty = getQty()
    console.log(`You have ${qty} items in your cart.`)

    for (let i = 0; i < cart.length; i += 1) {
        console.log(`- ${cart[i].name} $${cart[i].price} x ${cart[i].qty}`)
    }

    console.log(`Total in cart: $${getTotal()}`)
}

// Get qty
function getQty() {
    let qty = 0
    for (let i = 0; i < cart.length; i += 1) {
        qty += cart[i].qty
    }
    return qty
}

// Get total
function getTotal() {
    let total = 0
    for (let i = 0; i < cart.length; i += 1) {
        total += cart[i].price * cart[i].qty
    }
    return total.toFixed(2)
}

addItem('apple', 0.99)
addItem('orange', 1.29)
addItem('opinion', 0.02)
addItem('frisbee', 5.00)
addItem('apple', 0.99)
addItem('football', 10.00)
addItem('apple', 0.99)
addItem('orange', 1.29)

showItems()