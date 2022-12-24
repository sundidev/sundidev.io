
const name = document.querySelector('.name')
const input = document.querySelector('input')
const form = document.querySelector('form')

document.title = `ChristMass`

document.querySelector('.link').addEventListener('click', (event) => {
    event.preventDefault()
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    localStorage.setItem('name', JSON.stringify(input.value))
    console.log(personsName);
    input.value = ''
})

const personsName = JSON.parse(localStorage.getItem('name'))
name.innerText = personsName
function countdown() {
    const futureDate = new Date('December 25,2022 00:00:00').getTime()
    const now = new Date().getTime();
    const timeGap = futureDate - now;

    //date formate
    const seconds = 1000;
    const munite = seconds * 60;
    const hour = munite * 60;
    const day = hour * 24;


    //seting day
    let dayTo = Math.floor(timeGap / day);
    let hourTo = Math.floor((timeGap % day) / hour);
    let muniteTo = Math.floor((timeGap % hour) / munite);
    let secondTo = Math.floor((timeGap % munite) / seconds);



    document.querySelector('.days').innerText = dayTo;
    document.querySelector('.hours').innerText = hourTo;
    document.querySelector('.munites').innerText = muniteTo;
    document.querySelector('.seconds').innerText = secondTo;

}

setInterval(countdown, 1000);