import { menuArray } from "./data.js"


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
                <i class="fa-solid fa-circle-plus icon"></i>
            </section>
        `
    }).join('')

    return productsHtml
}

function render(){
    document.querySelector('.products').innerHTML = getProductsHtml()
}

render()
