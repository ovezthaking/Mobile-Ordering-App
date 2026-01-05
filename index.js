import { menuArray } from "./data.js"


document.addEventListener('click', (e) => {
    if (e.target.dataset.addItem) handleAddItemClick(e.target.dataset.addItem)
})


function handleAddItemClick(itemId){
    const item = menuArray.filter(item => item.id == itemId)[0]

    const { name, price } = item

    document.querySelector('.order-products').innerHTML += `
        <div class="order-product">
            <h3>${name}<button class="remove-btn" data-removeItem="${itemId}">remove</button></h3>
            <h4 class="order-price">$${price}</h4>
        </div>
    `
    const totalPrice = document.getElementById('total-price')
    let totalPriceInt = parseInt(totalPrice.textContent.slice(1))
    totalPriceInt += price

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
