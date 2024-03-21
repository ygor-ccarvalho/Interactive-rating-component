const rates = document.querySelectorAll(".option");

rates.forEach( (rate) => {
    rate.addEventListener('click', () => {
        console.log(rate.innerHTML)
    })    
});    




