const cartWrapper = document.querySelector('.cart-wrapper')


// Tracking the click on the page
window.addEventListener('click' , function(event){
    // Find the "Add to Basket" button by attribute.
    if(event.target.hasAttribute('data-cart')){

        // Find the card with the product inside which the click was made
        const card = event.target.closest('.card');

        // Create an object with information about the product you clicked on, to reproduce it in a template 
        const productInfo = {
            id:card.dataset.id,
            imgSrc: card.querySelector('.product-img').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itemsInBox: card.querySelector('[data-items-in-box]').innerText,
            weight: card.querySelector('.price__weight').innerText,
            price: card.querySelector('.price__currency').innerText,
            counter: card.querySelector ('[data-counter]').innerText,
        };
        
        // Creating a check - whether the item is in the cart
        const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)

        if (itemInCart){
            const counterEl = itemInCart.querySelector(`[data-counter]`);
            counterEl.innerText = +counterEl.innerText + +productInfo.counter;
        }else {
            const cartItemHtml = `<div class="cart-item" data-id="${productInfo.id}">
                            <div class="cart-item__top">
                                <div class="cart-item__img">
                                    <img src="${productInfo.imgSrc}" alt="">
                                </div>
                                <div class="cart-item__desc">
                                    <div class="cart-item__title">${productInfo.title}</div>
                                    <div class="cart-item__weight">${productInfo.itemsInBox} / ${productInfo.weight}</div>

                                    <div class="cart-item__details">

                                        <div class="items items--small counter-wrapper">
                                            <div class="items__control" data-action="minus">-</div>
                                            <div class="items__current" data-counter="">${productInfo.counter}</div>
                                            <div class="items__control" data-action="plus">+</div>
                                        </div>

                                        <div class="price">
                                            <div class="price__currency">${productInfo.price}</div>
                                        </div>

                                        </div>
                                        <!-- // cart-item__details -->

                                         </div>
                                        </div>
                                       </div>`
        // Insert the template into the HTML markup of CartWrapper.
        cartWrapper.insertAdjacentHTML('beforeend', cartItemHtml)
        
        }

                //Reset the counter to 1  
        card.querySelector('[data-counter]').innerText = '1';
        // Display cart status Empty / full
        toggleCartStatus();
        calcCartPrice();

    }
    

        
})