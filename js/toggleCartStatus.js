function toggleCartStatus (){
    const cartWrapper = document.querySelector('.cart-wrapper');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderBadge = document.querySelector('#order-form');
    const cartTotal = document.querySelector('.cart-total');



    if(cartWrapper.children.length > 0){
        cartEmptyBadge.classList.add('none')
        orderBadge.classList.remove('none')
        cartTotal.classList.remove('none')
    }else {
        cartEmptyBadge.classList.remove('none')
        orderBadge.classList.add('none')
        cartTotal.classList.add('none')
        
    }
}