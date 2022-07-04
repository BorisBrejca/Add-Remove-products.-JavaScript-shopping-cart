// Adding a wiretap to the window
window.addEventListener('click', function(event){

    // I declare a variable for the counter!!!
    let counter 

    // Strictly click the + . - 
    if(event.target.dataset.action === 'plus' || event.target.dataset.action === 'minus' ){
        // Find the meter wrapper (parents)
        const counterWrapper = event.target.closest(".counter-wrapper")
        // Find the parent date attribute with the desired counter
        counter = counterWrapper.querySelector('[data-counter]')
    }
    

// Globally find the Plus button (Is the item a Plus button)
        if(event.target.dataset.action === 'plus'){
            counter.innerText = ++counter.innerText;
        }

        // Globally find the Minus button (Is the item a Minus button)
        if(event.target.dataset.action === 'minus'){

            // Don't let the meter drop below 1
            if (+counter.innerText > 1){
                counter.innerText = --counter.innerText;
            } else if (event.target.closest('.cart-wrapper') && +counter.innerText === 1){
                    // Removing an item from the cart
                    event.target.closest('.cart-item').remove(); 
                    toggleCartStatus ();
                    calcCartPrice ()
            }

        }

        // Check the click on the + or - in the cart
        if(event.target.hasAttribute('data-action') && event.target.closest('.cart-wrapper')){
            calcCartPrice ()
        }

        })