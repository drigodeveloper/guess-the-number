const tryButton = document.querySelector(".tryButton")
const tryAgain = document.querySelector(".tryAgain")
const inputNumber = document.querySelector("#inputNumber")
const container = document.querySelector(".container")
let container2 = document.querySelector(".container2")
let accountant = 1

tryButton.addEventListener('click', function (event) {
    event.preventDefault()
    
    const randomNumber = Math.round(Math.random() * 10)
    
    console.log(randomNumber)
    if(Number(inputNumber.value) == randomNumber) {
        container.classList.toggle("hide")
        container2.classList.toggle("hide")
        container2.querySelector('h1').innerText = `Acertou em ${accountant} tentativas!`
    }
    inputNumber.value = ""
    accountant++
  
})

tryAgain.addEventListener('click', function(event) {
    event.preventDefault()
    container.classList.toggle("hide")
    container2.classList.toggle("hide")
    accountant = 1
})

