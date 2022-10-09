document.addEventListener('DOMContentLoaded', dotColor)

//Home slider 
function currentSlide(dotNumber) {
    let heroArea = document.querySelector("#hero")
    if (dotNumber === 1) {
        heroArea.style = "background-image: url('../assets/chauhan-moniz-3A0bs74T8zc-unsplash.jpg')"
        dotColor()
    } else if (dotNumber === 2) {
        heroArea.style = "background-image: url(https://i.pinimg.com/564x/e2/99/fc/e299fc75f46f3a8a3a863b480ebda12a.jpg)"
        dotColor()
    } else if (dotNumber === 3) {
        heroArea.style = "background-image: url(https://www.mymove.com/wp-content/uploads/2018/08/Wall-mounted-tv_@srijaroen_Getty-Images.jpg)"
        dotColor()
    }
}


//selected dot state 
function dotColor() {
    let dotOne = document.querySelector("#hero > div > div.flex.justify-center > div > span:nth-child(1)")
    let dotTwo = document.querySelector("#hero > div > div.flex.justify-center > div > span:nth-child(2)")
    let dotThree = document.querySelector("#hero > div > div.flex.justify-center > div > span:nth-child(3)")
    let heroArea = document.querySelector("#hero")
    let background = heroArea.style.backgroundImage
    console.log(background)

    if (background === '' || background === 'url("../assets/chauhan-moniz-3A0bs74T8zc-unsplash.jpg")') {
        dotOne.style.backgroundColor = 'gray'
        dotTwo.style.backgroundColor = 'black'
        dotThree.style.backgroundColor = 'black'
    } else if (background === 'url("https://i.pinimg.com/564x/e2/99/fc/e299fc75f46f3a8a3a863b480ebda12a.jpg")') {
        dotOne.style.backgroundColor = 'black'
        dotThree.style.backgroundColor = 'black'
        dotTwo.style.backgroundColor = 'gray'
    } else if (background === 'url("https://www.mymove.com/wp-content/uploads/2018/08/Wall-mounted-tv_@srijaroen_Getty-Images.jpg")') {
        dotOne.style.backgroundColor = 'black'
        dotThree.style.backgroundColor = 'gray'
        dotTwo.style.backgroundColor = 'black'
    }

}

//Movile nav functions 

btn = document.getElementById('ham-stack')
btn.addEventListener('click', navToggle)

mobMenu = document.getElementById('menu')

function navToggle() {
    btn.classList.toggle('open')
    mobMenu.classList.toggle('flex')
    mobMenu.classList.toggle('hidden')
}



