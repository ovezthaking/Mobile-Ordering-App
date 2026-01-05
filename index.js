import { menuArray } from "./data.js"


document.addEventListener('click', (e) => {
    if (e.target.dataset.addItem) handleAddItemClick(e.target.dataset.addItem)
    else if (e.target.dataset.removeItem) handleRemoveItemClick(e.target.dataset.removeItem)
})

let orderItemId = 0

function handleAddItemClick(itemId){
    const item = menuArray.filter(item => item.id == itemId)[0]

    const { name, price } = item
    const currentOrderItemId = orderItemId ++

    document.querySelector('.order-products').innerHTML += `
        <div class="order-product" data-order-id="${currentOrderItemId}">
            <h3>${name}<button class="remove-btn" data-remove-item="${itemId}" data-order-id="${currentOrderItemId}">remove</button></h3>
            <h4 class="order-price">$${price}</h4>
        </div>
    `
    const totalPrice = document.getElementById('total-price')
    let totalPriceInt = parseInt(totalPrice.textContent.slice(1))
    totalPriceInt += price
    
    totalPrice.textContent = `$${totalPriceInt}`
}

function handleRemoveItemClick(itemId){
    console.log('remove', itemId)
    const removeBtn = event.target
    const orderItemIdToRemove = removeBtn.dataset.orderId
    const item = menuArray.filter(item => item.id == itemId)[0]
    const { price } = item
    
    const orderProduct = document.querySelector(`.order-product[data-order-id="${orderItemIdToRemove}"]`)
    orderProduct.remove()

    const totalPrice = document.getElementById('total-price')
    let totalPriceInt = parseInt(totalPrice.textContent.slice(1))
    totalPriceInt -= price

    totalPrice.textContent = `$${totalPriceInt}`
}

function getProductsHtml(){
    const productsHtml = menuArray.map(product => {
        const { name, ingredients, id, price, emoji } = product

        const ingredientsString = ingredients.join(', ')
        
        return `
            <section class="product">
                <p class="emoji">${emoji}</p>
                <div class="properties">
                    <h2>${name}</h2>
                    <p class="ingredients">${ingredientsString}</p>
                    <h3>$${price}</h3>
                </div>
                <i class="fa-solid fa-circle-plus icon" data-add-item="${id}"></i>
            </section>
        `
    }).join('')

    return productsHtml
}

function render(){
    document.querySelector('.products').innerHTML = getProductsHtml()
}

render()
