let carQuardian = document.querySelector('.homepage_carquardian')
let cursor = carQuardian.querySelector('.cursor')


carQuardian.addEventListener('mousemove', (e)=>{
    const x = e.clientX - carQuardian.getBoundingClientRect().left;
    const y = e.clientY - carQuardian.getBoundingClientRect().top;
    console.log(x)

    cursor.style.left = `${x}px`;
    cursor.style.top = `${y}px`;
})




function randomPosition(e) {
    const maxX = window.innerWidth - 200;
    const maxY = window.innerHeight - 200;
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    e.style.left = `${randomX}px`
    e.style.top = `${randomY}px`
}


// let square1 = document.querySelector('.square1')
// let square2 = document.querySelector('.square2')

// function moveSquare() {
//     setInterval(()=>{
//         randomPosition(square1)
//         randomPosition(square2)
//     },1000)
// }

// moveSquare();

let home = document.querySelector('.homepage')
let mail = document.querySelector('.mail')

let work = document.querySelector('.detail-page')
let cardDetail = document.querySelectorAll('.card-detail')
cardDetail.forEach((e)=>{
    e.onclick = function() {
        work.classList.add('active')
        home.classList.remove('active')
    }
})

