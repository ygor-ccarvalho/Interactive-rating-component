const rates = document.querySelectorAll(".option");
const submit = document.getElementById("btn-submit");
const firstPage = document.querySelector(".first-page");
const thankYou = document.querySelector(".thank-you");
const rateSelected = document.getElementById('rate-selected');

rates.forEach( (rate) => {
    rate.addEventListener('click', () => {
        rateSelected.innerHTML = rate.innerHTML;
    })    
});



submit.addEventListener('click', () => {
    firstPage.classList.add('hide');
    thankYou.classList.remove('hide');
});



