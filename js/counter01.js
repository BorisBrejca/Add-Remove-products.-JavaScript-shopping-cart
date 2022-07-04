
// Find the elements for interaction
const btnMinus = document.querySelector('[data-action="minus"]');
const btnPlus = document.querySelector('[data-action="plus"]');
const counter = document.querySelector('[data-counter]');

// Trace the click on the Minus button.
btnMinus.addEventListener('click', function(){

    // Check that the counter is larger 1
    if (+counter.innerText > 1 ){
        // Change the text in the counter if the conditions are correct.
        counter.innerText = --counter.innerText;
    }

});

// Trace the click on the Plus button.
btnPlus.addEventListener('click', function(){
    counter.innerText = ++counter.innerText
})
